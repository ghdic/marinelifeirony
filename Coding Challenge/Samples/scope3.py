""" scope3.py """
message = "Hello"

def say():
    message = "Hi"
    print("say:message="+message)
    obj_id = id(message)
    print("say:id(message)={0:d}".format(obj_id))

def main():
    say()
    print("main:message="+message)
    obj_id = id(message)
    print("main:id(message)={0:d}".format(obj_id))

if __name__ == '__main__':
    main()
