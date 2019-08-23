# saturn voyager 운석을 화살표로 조작하여 피하는 게임
# ship은 z를 0으로 고정해놓고 x y 좌표만 움직임
import sys
from random import randint
import pygame
from pygame.locals import QUIT, KEYDOWN, KEYUP, \
    K_LEFT, K_RIGHT, K_UP, K_DOWN

pygame.init()
SURFACE = pygame.display.set_mode((800, 600))
FPSCLOCK = pygame.time.Clock()

def main():
    """ 메인 루틴 """
    # 초기값 세팅
    game_over = False
    score = 0
    speed = 25  # 스피드(시간 경과시 가속)
    stars = []  # 운석 저장 리스트
    keymap = []  # 어느 키가 입력되어 있는지 나타내는 리스트
    ship = [0, 0]  # 내 캐릭터 좌표
    scope_image = pygame.image.load("scope.png")
    rock_image = pygame.image.load("rock.png")

    scorefont = pygame.font.SysFont(None, 36)
    sysfont = pygame.font.SysFont(None, 72)
    message_over = sysfont.render("GAME OVER!!",\
                                   True, (0, 255, 225))
    message_rect = message_over.get_rect()
    message_rect.center = (400, 400)

    # 200개의 운석을 랜덤으로 배치, pos는 좌표(x, y, z), theta는 회전각
    while len(stars) < 200:
        stars.append({
            "pos": [randint(-1600, 1600),
                    randint(-1600, 1600), randint(0, 4095)],
            "theta": randint(0, 360)
        })

    while True:
        # 입력 받는 이벤트 처리 및 저장
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == KEYDOWN: # 누르고 있는지 떼고 있는지 확인해서 함
                if not event.key in keymap:
                    keymap.append(event.key)
            elif event.type == KEYUP:
                keymap.remove(event.key)

        # 프레임별 처리
        if not game_over:
            score += 1
            # 점수 10 증가마다 속도 1씩 증가
            if score % 10 == 0:
                speed += 1
            # keymap에 저장된 좌표 만큼 이동
            if K_LEFT in keymap:
                ship[0] -= 30
            elif K_RIGHT in keymap:
                ship[0] += 30
            elif K_UP in keymap:
                ship[1] -= 30
            elif K_DOWN in keymap:
                ship[1] += 30
            # 경계 체크
            ship[0] = max(-800, min(800, ship[0]))
            ship[1] = max(-800, min(800, ship[1]))

            # 운석을 이동 시킴
            for star in stars:
                star["pos"][2] -= speed
                # z축 64이하일때 충돌 체크 함
                if star["pos"][2] < 64:
                    if abs(star["pos"][0] - ship[0]) < 50 and \
                        abs(star["pos"][1] - ship[1]) < 50:
                        game_over = True
                    # 해당 운석을 맨 뒤로 재 배치함
                    star["pos"] = [randint(-1600, 1600),
                                   randint(-1600, 1600), 4095]

        # 그리기
        SURFACE.fill((0, 0, 0)) # 배경 검정색
        stars = sorted(stars, key=lambda x: x["pos"][2],
                       reverse=True) # 운석 z축 순으로 정렬

        for star in stars:
            zpos = star["pos"][2]
            xpos = ((star["pos"][0] - ship[0]) << 9) / zpos + 400  # +400은 800 * 800 그리기 영역의 중심을 원점으로 하기 위함
            ypos = ((star["pos"][1] - ship[1]) << 9) / zpos + 400  # 뭐..800*600이지만?
            size = (50 << 9) / zpos  # << 9는 2^9 512배를 의미함 원근감을 주기 위한 곱
            rotated = pygame.transform.rotozoom(rock_image,
                                                star["theta"], size / 145) # 회전 & 줌한 이미지 반환
            SURFACE.blit(rotated, (xpos, ypos))

        SURFACE.blit(scope_image, (0, 0))

        if game_over:
            SURFACE.blit(message_over, message_rect)
            pygame.mixer.music.stop()

        # 점수 나타내기
        score_str = str(score).zfill(6) # 왼쪽 기준 6자리 부분에 비어 있는 곳을 0으로 채워줌
        score_image = scorefont.render(score_str, True,
                                       (0, 255, 0))
        SURFACE.blit(score_image, (700, 50))

        pygame.display.update()
        FPSCLOCK.tick(20)

if __name__ == "__main__":
    main()
