import imaplib
import email
from email.header import decode_header, make_header
import os

server = imaplib.IMAP4_SSL('imap.gmail.com')  # SSL시 포트 993 아닐시 143
server.login(os.environ['email'], os.environ['pw'])

rv, data = server.select()

rv, data = server.search(None, 'ALL')
for num in data[0].split():
    typ, data = server.fetch(num, '(RFC822)')
    print(f'Message {num} {data[0][1]}')

rv, fetched = server.fetch(data[0], '(RFC822)')
print(rv, fetched)

message = email.message_from_bytes(fetched[0][1])
fr = make_header(decode_header(message.get('From')))
print(fr)

subject = make_header(decode_header(message.get('Subject')))
print(subject)

if message.is_multipart():
    for part in message.walk():
        ctype = part.get_content_type()
        cdispo = str(part.get('Content-Disposition'))
        if ctype == 'text/plain' and 'attachment' not in cdispo:
            body = part.get_payload(decode=True)
            break
else:
    body = message.get_payload(decode=True)

body = body.decode('utf-8')

print(body)



server.close()
server.logout()