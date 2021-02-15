""" draw_text1.py """
import sys
import pygame
from pygame.locals import QUIT

pygame.init()
SURFACE = pygame.display.set_mode((400, 200))
FPSCLOCK = pygame.time.Clock()

def main():
    sysfont = pygame.font.SysFont(None, 72)
    message = sysfont.render("Hello Python", True, (0, 128, 128))
    message_rect = message.get_rect()
    message_rect.center = (200, 100)

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()

        SURFACE.fill((255, 255, 255))
        SURFACE.blit(message, message_rect)
        pygame.display.update()
        FPSCLOCK.tick(3)

if __name__ == '__main__':
    main()
