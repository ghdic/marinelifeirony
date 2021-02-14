""" scope2.py """
message = "Hello"

def say():
    message = "Hi"
    print("say:message="+message)

def main():
    say()
    print("main:message="+message)

if __name__ == '__main__':
    main()
