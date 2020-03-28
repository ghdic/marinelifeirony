""" draw_image4.py """
import sys
import pygame
from pygame.locals import QUIT

pygame.init()
SURFACE = pygame.display.set_mode((400, 300))
FPSCLOCK = pygame.time.Clock()

def main():
    """ main routine """
    logo = pygame.image.load("pythonlogo.jpg")
    theta = 0

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()

        theta += 1

        SURFACE.fill((225, 225, 225))

        # 로고를 회전하고, 중심이 (200, 150)위치에 로고를 그린다
        new_logo = pygame.transform.rotate(logo, theta)
        rect = new_logo.get_rect()
        rect.center = (200, 150)
        SURFACE.blit(new_logo, rect)

        pygame.display.update()
        FPSCLOCK.tick(30)

if __name__ == '__main__':
    main()
