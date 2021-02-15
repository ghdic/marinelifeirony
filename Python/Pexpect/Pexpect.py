# pip install pexpect
# pip install winpexpect (윈도우에서)
# CLI(Command Line Interface) 자동화 모듈
import winpexpect

command = 'cmd.exe'
session = winpexpect.winspawn(command)
print(session.before)
session.expect('>')
session.sendline("notepad")

#print(session.before)
#session.interact()