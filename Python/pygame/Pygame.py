
# # rect의 center를 변경하면 x, y 좌표가 자동으로 바뀐다
#
# a = Rect(1, 1, 11, 11)
# print(a.center)
# print(a.x, a.y, a.width, a.height)
# a.center = (20, 20)
# print(a.x, a.y, a.width, a.height)
# print(a.center)

# # 기본적인 틀
# pygame.init()  # pygame 시작
# pygame.key.set_repeat(5, 5)  # 키 입력을 5 간격으로 받을 수 있게 제한을 둠
# SURFACE = pygame.display.set_mode((800, 800), FULLSCREEN)  # 800, 800 스크린크기로 설정 풀스크린도 가능
# FPSCLOCK = pygame.time.Clock()  # tick 함수로 fps를 정함
#
# while True:
#     pygame.display.update() # 디스플레이 blit한것을 업데이트함
#     FPSCLOCK.tick(20)


# # 키 이벤트를 처리 하는 방식 키를 누르고 있는지 떼고있는지 확인하여 리스트에 넣고 뺌
# def key_event_handler(keymap, ship):
#     """ 키 이벤트를 처리한다 """
#     for event in pygame.event.get():
#         if event.type == QUIT or event.type == "ALT + F4":
#             pygame.quit()
#             sys.exit()
#         elif event.type == KEYDOWN:
#             if not event.key in keymap:
#                 keymap.append(event.key)
#         elif event.type == KEYUP:
#             keymap.remove(event.key)  # 키를 땔때 지우며 누를 키 중 우선권을 주는 기법?