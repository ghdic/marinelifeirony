# 스페이스바를 눌러 위 아래로 움직여 벽을 피하는 게임

import sys
from random import randint
import pygame
from pygame.locals import QUIT, Rect, KEYDOWN, K_SPACE

# 전역 변수
pygame.init()
pygame.key.set_repeat(5, 5)  # 키의 반복 기능을 설정하는 메서드 set_repeat(delay, interval)
SURFACE = pygame.display.set_mode((800, 600))  # 윈도우
FPSCLOCK = pygame.time.Clock()  # 프레임 레이트 조정 타이머

def main():
    walls = 80  # 동굴을 구성하는 직사각형 수
    ship_y = 250  # 내 캐릭터의 Y 좌표
    velocity = 0  # 내 캐릭터가 상하로 이동할 때의 속도
    score = 0  # 점수
    slope = randint(1, 6)  # 동굴의 경사도
    sysfont = pygame.font.SysFont(None, 36)  # 폰트
    ship_image = pygame.image.load("ship.png") # 배 이미지
    bang_image = pygame.image.load("bang.png") # 사망시 이미지
    holes = [] # 동굴을 구성하는 직사각형을 저장하는 배열
    for xpos in range(walls):  # walls개의 Rect를 holes에 담음
        holes.append(Rect(xpos * 10, 100, 10, 400))
    # Rect는 직사각형을 정의하는 클래스
    # Rect(left, top, width, height) -> Rect
    # Rect((left, top), (width, height)) -> Rect
    # Rect(object) -> Rect
    game_over = False  # 게임 오버 확인

    while True:
        is_space_down = False  # 스페이스바 누르면 true
        for event in pygame.event.get():
            if event.type == QUIT:  # 윈도우 상단의 x 눌렀을때 종료 안해주면 안꺼짐 ㅋㅋㅋ
                pygame.quit()
                sys.exit()
            elif event.type == KEYDOWN:
                if event.key == K_SPACE: # 스페이스바 눌렀을대
                    is_space_down = True

        # 내 캐릭터를 이동
        if not game_over:
            score += 10 # 점수 증가
            velocity += -3 if is_space_down else 3 # 스페이스바에 따라 가속도 변경
            # 조건부 표현식 (참인 경우) if (조건문) else (거짓인 경우)
            # 삼단 논법 대용으로 있는듯..? (조건) ? (참인경우):(거짓인경우)
            ship_y += velocity # 속도 변경

            # 동굴을 스크롤
            edge = holes[-1].copy()  # 마지막 직사각형 복사
            test = edge.move(0, slope)
            if test.top <= 0 or test.bottom >= 600:  # 새로 만든 직사각형이 천장이나 바닥에 부딪히는지 검출
                slope = randint(1, 6) * (-1 if slope > 0 else 1) # 반대방향으로 1~6경사도
                edge.inflate_ip(0, -20)  # inflate_ip(x, y) 사각형 사이즈 증가&수축 inflate는 변경된 새로운 Rect를 반환함. 기능에 차이는 크게없음
            edge.move_ip(10, slope)  # move_ip (x, y) x,y만큼 움직임
            holes.append(edge)  # 새로운 구멍을 추가함
            del holes[0]  # 첫번째 벽을 제거
            holes = [x.move(-10, 0) for x in holes]  # 벽 전체를 10만큼 전진시킴

            # 충돌 확인
            if holes[0].top > ship_y or \
                holes[0].bottom < ship_y + 80:
                game_over = True


        # 그리기
        SURFACE.fill((0, 255, 0))  # 배경 초록색으로 채움
        for hole in holes:  # 구멍을 그려줌
            pygame.draw.rect(SURFACE, (0, 0, 0), hole)
        SURFACE.blit(ship_image, (0, ship_y))  # 배를 그려줌
        score_image = sysfont.render("score is {}".format(score), True, (0, 0, 225))
        SURFACE.blit(score_image, (600, 20))  # 점수 그려줌

        if game_over:  # 게임 종료시 폭발 이미지 그려줌
            SURFACE.blit(bang_image, (0, ship_y-40))

        pygame.display.update()  # built한 것들을 업데이트해줌
        FPSCLOCK.tick(15)

if __name__ == "__main__":
    main()
