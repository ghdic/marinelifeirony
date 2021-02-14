""" draw_image2.py """
import sys
import pygame
from pygame.locals import QUIT

pygame.init()
SURFACE = pygame.display.set_mode((400, 300))
FPSCLOCK = pygame.time.Clock()

def main():
    """ main routine """
    logo = pygame.image.load("pythonlogo.jpg")

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()

        SURFACE.fill((225, 225, 225))

        # (200, 150)が中心になるようにロゴを描画
        rect = logo.get_rect()
        rect.center = (200, 150)
        SURFACE.blit(logo, rect)

        pygame.display.update()
        FPSCLOCK.tick(30)

if __name__ == '__main__':
    main()
