# 블록 깨기 : 패들을 조작하여 튕겨낸 공으로 화면의 블록을 제거하는 게임이다.
import sys
import math
import random
import pygame
from pygame.locals import QUIT, KEYDOWN, K_LEFT, K_RIGHT, Rect

class Block:
    """ 블록, 공, 패들 오브젝트 """
    def __init__(self, col, rect, speed=0):
        self.col = col
        self.rect = rect
        self.speed = speed  # speed 공 이외에는 전부 0.. 이거 비효율적이라 따로떼는게 더나을듯..?
        self.dir = random.randint(-45, 45) + 270  # 공만 사용..  +-45도를 아래로 향하게함

    def move(self):
        """ 공을 움직인다 """
        self.rect.centerx += math.cos(math.radians(self.dir))\
            * self.speed
        self.rect.centery -= math.sin(math.radians(self.dir))\
            * self.speed  # 삼각함수 이용해 공을 움직여줌

    def draw(self):
        """ 블록, 공, 패들을 그린다 """
        if self.speed == 0:
            pygame.draw.rect(SURFACE, self.col, self.rect)
        else:
            pygame.draw.ellipse(SURFACE, self.col, self.rect)
            #  공인 경우에는 원을 그려줌

def tick():
    """ 프레임별 처리 """
    global BLOCKS
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == KEYDOWN:
            if event.key == K_LEFT:
                PADDLE.rect.centerx -= 10
            elif event.key == K_RIGHT:
                PADDLE.rect.centerx += 10
    if BALL.rect.centery < 1000:  # 게임 오버하고 공 움직이는 로직 안하기 위한 것
        BALL.move()
    
    # 블록과 충돌?
    prevlen = len(BLOCKS)
    BLOCKS = [x for x in BLOCKS \
            if not x.rect.colliderect(BALL.rect)]  # 블록과 충돌한것 삭제
    if len(BLOCKS) != prevlen:
        BALL.dir *= -1  # 블록 부딪혔을 경우 방향 전환해줌

    # 패들과 충돌
    # 패들의 중심과 공의 중심 사이 거리를 구하고 충돌 장소에따라 반사각 변하게함
    if PADDLE.rect.colliderect(BALL.rect):
        BALL.dir = 90 + (PADDLE.rect.centerx - BALL.rect.centerx) \
            / PADDLE.rect.width * 80

    # 벽과 충돌 및 반사처리
    if BALL.rect.centerx < 0 or BALL.rect.centerx > 600:
        BALL.dir = 180 - BALL.dir  # 양 옆 벽을 맞을 경우 180 - x
    if BALL.rect.centery < 0:
        BALL.dir = -BALL.dir  # 위에 벽에 맞을 경우 반사
        BALL.speed = 15  # 볼 속도 증가

pygame.init()
pygame.key.set_repeat(5, 5)
SURFACE = pygame.display.set_mode((600, 800))
FPSCLOCK = pygame.time.Clock()
BLOCKS = []  # 블록 객체를 저장하는 리스트
PADDLE = Block((242, 242, 0), Rect(300, 700, 100, 30))  # 패들 객체(block객체의 인스턴스 사용)
BALL = Block((242, 242, 0), Rect(300, 400, 20, 20), 10)  # 공 객체(block객체의 인스턴스)

def main():
    """ 메인 루틴 """
    # 초기 세팅
    myfont = pygame.font.SysFont(None, 80)
    mess_clear = myfont.render("Cleared!", True, (255, 255, 0))
    mess_over = myfont.render("Game Over!", True, (255, 255, 0))
    fps = 30
    colors = [(255, 0, 0), (255, 165, 0), (242, 242, 0),
            (0, 128, 0), (128, 0, 128), (0, 0, 250)]

    # 색깔 별로 블록 넣어줌
    for ypos, color in enumerate(colors, start=0): # enumerate -> tuple로 (idx, element) 돌려줌
        for xpos in range(0, 5):
            BLOCKS.append(Block(color,
                            Rect(xpos * 100 + 60, ypos * 50 + 40, 80, 30)))

    while True:
        tick()  # 프레임 별 처리

        # 그리기
        SURFACE.fill((0, 0, 0))
        BALL.draw()
        PADDLE.draw()
        for block in BLOCKS:
            block.draw()

        if len(BLOCKS) == 0:
            SURFACE.blit(mess_clear, (200, 400))
        if BALL.rect.centery > 800 and len(BLOCKS) > 0:
            SURFACE.blit(mess_over, (150, 400))

        pygame.display.update()
        FPSCLOCK.tick(fps)

if __name__ == '__main__':
    main()