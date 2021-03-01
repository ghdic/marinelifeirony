import curses
import locale
locale.setlocale(locale.LC_ALL, '')


def print_dictation(windows, texts):
    """ len(windows) >= len(texts)이여야함 """
    if len(windows) < len(texts):
        raise Exception("너무 많은 텍스트를 넘겨주었습니다")
    for idx, text in enumerate(texts):
        if idx == 0:
            print_center(windows[idx], text, curses.color_pair(1))
        else:
            print_center(windows[idx], text)

def print_center(window, text, style=None, line=0):
    try:
        h, w = window.getmaxyx()
        if style:
            window.addstr(h//2 + line, (w - len(text))//2, text, style)
        else:
            window.addstr(h // 2 + line, (w - len(text)) // 2, text)
        window.refresh()
    except:  # 줄 넘어가는 경우 처리
        text1, text2 = text[:len(text)//2], text[len(text)//2:]
        line1 = print_center(window, text1, style, line)
        line2 = print_center(window, text2, style, line1+1)
        line = max(line1, line2)
    return line


stdscr = curses.initscr()
curses.start_color()
curses.curs_set(0)
curses.init_pair(1, curses.COLOR_BLACK, curses.COLOR_WHITE)
stdscr.clear()
curses.echo()  # 키보드 입력값이 화면에 출력



score = 0
score_window = curses.newwin(3, 6, 0, 20)

dictation_windows = [
    curses.newwin(3, curses.COLS, 9, 0),
    curses.newwin(3, curses.COLS, 6, 0),
    curses.newwin(3, curses.COLS, 3, 0)
]
input_window = curses.newwin(3, curses.COLS, 12, 0)  # (h, w, y, x) height 넉넉하게 줄것
input_window.getch

import time
time.sleep(3)

curses.endwin()


# import curses
# import curses.textpad
# import random
#
# stdscr = curses.initscr()
# curses.start_color()  #
# curses.nonl()
# curses.noecho()
# curses.cbreak()
# stdscr.keypad(1)
#
# # Initialize few color pairs
# curses.init_pair(1, curses.COLOR_WHITE, curses.COLOR_GREEN)
# #curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_GREEN)
# curses.init_pair(3, curses.COLOR_WHITE, curses.COLOR_GREEN)
# curses.init_pair(4, curses.COLOR_MAGENTA, curses.COLOR_BLACK)
# curses.init_pair(5, curses.COLOR_CYAN, curses.COLOR_BLACK)
# curses.init_pair(6, curses.COLOR_WHITE, curses.COLOR_BLACK)
# curses.init_pair(7, curses.COLOR_BLACK, curses.COLOR_WHITE)
#
# x0 = int(random.random() * 90) + 10
# y0 = int(random.random() * 90) + 10
# z0 = x0 * y0
# s01 = int(x0 / 10) * int(y0 / 10)
# s02 = (x0 % 10) * (y0 % 10)
# t0 = int(x0 / 10) * (y0 % 10) + (x0 % 10) * int(y0 / 10)
#
# stdscr.addstr(3, 4, "%4d" % x0)
# stdscr.addstr(4, 3, "x%4d" % y0)
# stdscr.addstr(5, 3, "-----")
# stdscr.addstr(6, 4, "%2d%02d" % (s01, s02))
# stdscr.addstr(7, 4, "%3d" % t0)
# stdscr.addstr(8, 3, "-----")
# stdscr.addstr(9, 4, "%4d" % z0)
#
# x = int(random.random() * 90) + 10
# y = int(random.random() * 90) + 10
# z = x * y
# s1 = int(x / 10) * int(y / 10)
# s2 = (x % 10) * (y % 10)
# t = int(x / 10) * (y % 10) + (x % 10) * int(y / 10)
#
# o1 = 0
# o2 = 0
# o3 = 0
# if s1 < 10:
#     o1 = 1
# if t < 100:
#     o2 = 1
# if z < 1000:
#     o3 = 1
#
# stdscr.addstr(3, 14, "%4d" % x)
# stdscr.addstr(4, 13, "x%4d" % y)
# stdscr.addstr(5, 13, "-----")
# stdscr.addstr(8, 13, "-----")
# stdscr.move(6, 14)
# stdscr.refresh()
#
# curses.nl()
# curses.noecho()
#
# win4 = curses.newwin(14, 48, 3, 28)
# win5 = curses.newwin(2, 78, 21, 0)
#
# win4.addstr(0, 0, "Ctrl-A Go to left edge of edit box.")
# win4.addstr(1, 0, "Ctrl-B Cursor left.")
# win4.addstr(2, 0, "Ctrl-D Delete character under cursor.")
# win4.addstr(3, 0, "Ctrl-E Go to right edge of edit box.")
# win4.addstr(4, 0, "Ctrl-F Cursor right.")
# win4.addstr(5, 0, "Ctrl-G Terminate, returning the box's contents.")
# win4.addstr(6, 0, "Ctrl-H Delete character backward.")
# win4.addstr(7, 0, "Ctrl-J Terminate if the edit box is 1 line.")
# win4.addstr(8, 0, "Ctrl-K Clear to end of line.")
# win4.addstr(9, 0, "Ctrl-L Refresh screen.")
#
# win4.refresh()
# # win4.getch()
#
# win1 = curses.newwin(1, 5, 6, 14)  # (h,w,y,x)
# win2 = curses.newwin(1, 4, 7, 14)  # (h,w,y,x)
# win3 = curses.newwin(1, 5, 9, 14)  # (h,w,y,x)
# win1.bkgd(curses.color_pair(1))
# win2.bkgd(curses.color_pair(1))
# win3.bkgd(curses.color_pair(1))
# win1.refresh()
# win2.refresh()
# win3.refresh()
# win1.move(0, 0)
#
# box1 = curses.textpad.Textbox(win1, insert_mode=True)
# box2 = curses.textpad.Textbox(win2, insert_mode=True)
# box3 = curses.textpad.Textbox(win3, insert_mode=True)
# a1 = box1.edit()
# win2.move(0, 0)
# a2 = box2.edit()
# win3.move(0, 0)
# a3 = box3.edit()
#
# stdscr.move(15, 0)
# stdscr.attron(curses.color_pair(6))
#
# try:
#     tmp1 = int(a1)
#     tmp2 = int(a2)
#     tmp3 = int(a3)
#     stdscr.addstr(15, 0, "Your answers are")
#     stdscr.addstr(16, 0, "            %4d" % int(a1))
#     stdscr.addstr(17, 0, "            %3d" % int(a2))
#     stdscr.addstr(18, 0, "            %4d" % int(a3))
#
#     stdscr.addstr(15, 20, "Right answers are")
#     stdscr.addstr(16, 20, "             %2d%02d" % (s1, s2))
#     stdscr.addstr(17, 20, "             %3d" % t)
#     stdscr.addstr(18, 20, "             %4d" % z)
#
#     if int(a1) == s1 * 100 + s2 and int(a2) == t and int(a3) == z:
#         stdscr.addstr(20, 0, "Yours are right... ")
#     else:
#         stdscr.addstr(20, 0, "Yours are wrong... ")
#
#     stdscr.getch()
# except:
#     stdscr.addstr(15, 0, "Some invalid charactres are found... ")
#     stdscr.refresh()
#     stdscr.getch()
# finally:
#     curses.nl()
#     curses.nocbreak();
#     stdscr.keypad(0);
#     curses.echo()
#     curses.endwin()