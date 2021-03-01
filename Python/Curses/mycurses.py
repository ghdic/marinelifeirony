"""
터미널를 리다이렉션해서 자유로운 좌표에 입/출력 할 수 있게 해주는 라이브러리
파이참에서는 리다이렉션을 지원해주지 않아 실행되지 않는다

윈도우는 pip install windows-curser
"""

# # 1. curses 초기화 기본설정
# import curses
# import locale
#
# locale.setlocale(locale.LC_ALL, '')
#
#
# def is_hangul(c):
#     """ 해당 문자가 한글인지 확인 """
#     try:
#         if ord('가') <= ord(c) <= ord('힣'):
#             return True
#     except TypeError:
#         pass
#     return False
#
#
# stdscr = curses.initscr()  # 초기화
# curses.noecho()  # 키 입력시 자동으로 에코 하는 것을 끔
# curses.cbreak()  # Enter 키를 누르지 않아도 즉시 키에 반응
# curses.echo()
# curses.nobreak()
# stdscr.keypad(True)  # page up, home 등 탐색키, 특수키 키패드 활성화
# curses.endwin()  # 종료



# # 2. wrapper
# # wrapper은 stdscr를 인자로 던져주고 cbreak on, keypad on, 색상 초기화를 해줌
# # 종료전에 건드렸던 옵션들을 복구해줌, 에러 발생시 출력 용도로도 쓰임
# from curses import wrapper
#
# def main(stdscr):
#     # Clear screen
#     stdscr.clear()
#
#     # i == 10 일때 ZeroException 에러 발생
#     for i in range(0, 11):
#         v = i-10
#         stdscr.addstr(i, 0, '10 divided by {} is {}'.format(v, 10/v))
#
#     stdscr.refresh()
#     stdscr.getkey()
#
# wrapper(main)



# # window와 pad
# import curses
#
# stdcsr = curses.initscr()
# begin_x, begin_y = 5, 7  # curses.LINES, curses.COLS
# height, width = 5, 40
#
# window = curses.newwin(height, width, begin_y, begin_x)




# # 3. 키 입력 출력
# import curses
# import time
#
# stdscr = curses.initscr()
# curses.echo()
#
# y, x = 1, 10
# wch = stdscr.get_wch(y, x)  # 유니코드 입력
# stdscr.addch(y+1,x, wch, curses.A_UNDERLINE)
# """
# A_BLINK 깜박거리는 텍스트
# A_BOLD 매우 밝거나 굵은 텍스트
# A_DIM 절반 밝기의 텍스트
# A_REVERSE 반전 비디오 텍스트
# A_STANDOUT 사용 가능한 최고 강조 표시 모드
# A_UNDERLINE 밑줄이 그어진 텍스트
# """
# # ch = stdscr.getch(12, 3)  # 1-255 키 즉시입력받음
# # # key = stdscr.getkey()  # getch와 같으나 키패드 등 멀티바이트 문자열도 반환
# # stdscr.addch(y, x, ch)
# # st = stdscr.getstr(13, 3)  # str입력받음
# # stdscr.addstr(y+1, x, st)  # 문자열 입력
#
# stdscr.refresh()  # 갱신해줘야 추가한것 출력
# time.sleep(5)



# # init_pair, atton, attoff 글자 스타일 넣기
# import curses
# import time
#
#
# def main(stdscr):
#     curses.curs_set(0)
#     curses.init_pair(1, curses.COLOR_RED, curses.COLOR_YELLOW)  # 해당 id로 글자색, 배경색 설정
#
#     h, w = stdscr.getmaxyx()
#
#     text = "Hello, World!"
#
#     x = w//2 - len(text)//2
#     y = h//2
#     stdscr.attron(curses.color_pair(1))  # 속성 on
#     stdscr.addstr(y, x, text)
#     stdscr.attroff(curses.color_pair(1))  # 속성 off
#
#     stdscr.refresh()
#     time.sleep(3)
#
#
# curses.wrapper(main)



# # menu 만들기
# import curses
#
# menu = ['Home', 'Play', 'Scoreboard', 'Exit']
#
# def print_menu(stdscr, selected_row_idx):
#     stdscr.clear()
#     h, w = stdscr.getmaxyx()
#
#     for idx, row in enumerate(menu):
#         x = w//2 - len(row)//2
#         y = h//2 - len(menu)//2 + idx
#         if idx == selected_row_idx:
#             #stdscr.attron(curses.color_pair(1))
#             stdscr.addstr(y, x, row, curses.color_pair(1))
#             # stdscr.attroff(curses.color_pair(1))
#         else:
#             stdscr.addstr(y, x, row)
#
#     stdscr.refresh()
#
#
# def main(stdscr):
#     curses.curs_set(0)
#     curses.init_pair(1, curses.COLOR_BLACK, curses.COLOR_WHITE)
#     current_row_idx = 0
#     print_menu(stdscr, current_row_idx)
#     while 1:
#         key = stdscr.getch()
#         stdscr.clear()
#
#         if key == curses.KEY_UP and current_row_idx > 0:
#             current_row_idx -= 1
#         elif key == curses.KEY_DOWN and current_row_idx < len(menu)-1:
#             current_row_idx += 1
#         elif key == curses.KEY_ENTER or key in [10, 13]:
#             stdscr.clear()
#             stdscr.addstr(0, 0, f"You pressed {menu[current_row_idx]}")
#             stdscr.refresh()
#             stdscr.getch()
#             if current_row_idx == len(menu)-1:
#                 break
#         print_menu(stdscr, current_row_idx)
#
# curses.wrapper(main)


# # snake 게임
# import random
# import curses
# from curses import textpad
#
# OPPOSITE_DIRECTION_DICT = {
#     curses.KEY_UP: curses.KEY_DOWN,
#     curses.KEY_DOWN: curses.KEY_UP,
#     curses.KEY_RIGHT: curses.KEY_LEFT,
#     curses.KEY_LEFT: curses.KEY_RIGHT
# }
#
# DIRECTIONS_LIST = [curses.KEY_RIGHT, curses.KEY_LEFT, curses.KEY_DOWN, curses.KEY_UP]
#
#
# def create_food(snake, box):
#     """Simple function to find coordinates of food which is inside box and not on snake body"""
#     food = None
#     while food is None:
#         food = [random.randint(box[0][0]+1, box[1][0]-1),
#         random.randint(box[0][1]+1, box[1][1]-1)]
#         if food in snake:
#             food = None
#     return food
#
#
# def main(stdscr):
#     # initial settings
#     curses.curs_set(0)
#     stdscr.nodelay(1)
#     stdscr.timeout(100)
#
#     # create a game box
#     sh, sw = stdscr.getmaxyx()
#     box = [[3,3], [sh-3, sw-3]]  # [[ul_y, ul_x], [dr_y, dr_x]]
#     textpad.rectangle(stdscr, box[0][0], box[0][1], box[1][0], box[1][1])
#
#     # create snake and set initial direction
#     snake = [[sh//2, sw//2+1], [sh//2, sw//2], [sh//2, sw//2-1]]
#     direction = curses.KEY_RIGHT
#
#     # draw snake
#     for y,x in snake:
#         stdscr.addstr(y, x, '#')
#
#     # create food
#     food = create_food(snake, box)
#     stdscr.addstr(food[0], food[1], '*')
#
#     # print score
#     score = 0
#     score_text = "Score: {}".format(score)
#     stdscr.addstr(1, sw//2 - len(score_text)//2, score_text)
#
#     while 1:
#         # non-blocking input
#         key = stdscr.getch()
#
#         # set direction if user pressed any arrow key and that key is not opposite of current direction
#         if key in DIRECTIONS_LIST and key != OPPOSITE_DIRECTION_DICT[direction]:
#             direction = key
#
#
#         # find next position of snake head
#         head = snake[0]
#         if direction == curses.KEY_RIGHT:
#             new_head = [head[0], head[1]+1]
#         elif direction == curses.KEY_LEFT:
#             new_head = [head[0], head[1]-1]
#         elif direction == curses.KEY_DOWN:
#             new_head = [head[0]+1, head[1]]
#         elif direction == curses.KEY_UP:
#             new_head = [head[0]-1, head[1]]
#
#         # insert and print new head
#         stdscr.addstr(new_head[0], new_head[1], '#')
#         snake.insert(0, new_head)
#
#         # if sanke head is on food
#         if snake[0] == food:
#             # update score
#             score += 1
#             score_text = "Score: {}".format(score)
#             stdscr.addstr(1, sw//2 - len(score_text)//2, score_text)
#
#             # create new food
#             food = create_food(snake, box)
#             stdscr.addstr(food[0], food[1], '*')
#
#             # increase speed of game
#             stdscr.timeout(100 - (len(snake)//3)%90)
#         else:
#             # shift snake's tail
#             stdscr.addstr(snake[-1][0], snake[-1][1], ' ')
#             snake.pop()
#
#         # conditions for game over
#         if (snake[0][0] in [box[0][0], box[1][0]] or
#             snake[0][1] in [box[0][1], box[1][1]] or
#             snake[0] in snake[1:]):
#             msg = "Game Over!"
#             stdscr.addstr(sh//2, sw//2-len(msg)//2, msg)
#             stdscr.nodelay(0)
#             stdscr.getch()
#             break
#
# curses.wrapper(main)



# # 마우스 클릭 이벤트
# import curses
#
#
# def main(stdscr):
#     curses.curs_set(0)
#     curses.mousemask(1)
#     curses.init_pair(1, curses.COLOR_WHITE, curses.COLOR_RED)
#     curses.init_pair(2, curses.COLOR_WHITE, curses.COLOR_GREEN)
#
#     stdscr.addstr(0, 0, "Hello!")
#     stdscr.addstr(1, 0, "Red")
#     stdscr.addstr(2, 0, "Green")
#
#     while 1:
#         stdscr.refresh()
#         key = stdscr.getch()
#
#         if key == curses.KEY_MOUSE:
#             _, x, y, _, _ = curses.getmouse()
#             if y == 1 and x in range(3):
#                 stdscr.attron(curses.color_pair(1))
#                 stdscr.addstr(0, 0, "Hello!")
#                 stdscr.attroff(curses.color_pair(1))
#             elif y == 2 and x in range(5):
#                 stdscr.attron(curses.color_pair(2))
#                 stdscr.addstr(0, 0, "Hello!")
#                 stdscr.attroff(curses.color_pair(2))
#         elif key == 27:
#             break
#
#
# curses.wrapper(main)

