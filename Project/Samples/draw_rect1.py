""" draw_rect1.py """
import sys
import pygame
from pygame.locals import QUIT, Rect

pygame.init()
SURFACE = pygame.display.set_mode((400, 300))
FPSCLOCK = pygame.time.Clock()

def main():
    """ main routine """

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()

        SURFACE.fill((255, 255, 255))

        # 빨간색: 직사각형 (빈틈없이 칠한다)
        pygame.draw.rect(SURFACE, (255, 0, 0), (10, 20, 100, 50))

        # 빨간색: 직사각형 (굵기 3)
        pygame.draw.rect(SURFACE, (255, 0, 0), (150, 10, 100, 30), 3)

        # 녹색: 직사각형
        pygame.draw.rect(SURFACE, (0, 255, 0), ((100, 80), (80, 50)))

        # 파란색: 직사각형, Rect 오브젝트
        rect0 = Rect(200, 60, 140, 80)
        pygame.draw.rect(SURFACE, (0, 0, 255), rect0)

        # 노란색: 직사각형, Rect 오브젝트
        rect1 = Rect((30, 160), (100, 50))
        pygame.draw.rect(SURFACE, (255, 255, 0), rect1)

        pygame.display.update()
        FPSCLOCK.tick(3)

if __name__ == '__main__':
    main()
