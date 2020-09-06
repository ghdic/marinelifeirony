import pyautogui
from tkinter import *
import threading
import time

def updateMousePos():
    global lbl
    global text
    while True:
        x, y = pyautogui.position()
        text.set(f"x: {x} y: {y} ")
        time.sleep(0.1)

window = Tk()

text = StringVar()
lbl = Label(window, textvariable=text)
lbl.pack()

t = threading.Thread(target=updateMousePos)
t.daemon = True
t.start()
window.mainloop()