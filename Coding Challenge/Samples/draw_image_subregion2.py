""" draw_image_subregion2.py """
import sys
import pygame
from pygame.locals import QUIT, Rect, KEYDOWN, K_LEFT, K_RIGHT

pygame.init()
pygame.key.set_repeat(5, 5)
SURFACE = pygame.display.set_mode((300, 200))
FPSCLOCK = pygame.time.Clock()

def main():
    """ main routine """
    strip = pygame.image.load("strip.png")
    images = []
    for index in range(9):
        image = pygame.Surface((24, 24))
        image.blit(strip, (0, 0), Rect(index * 24, 0, 24, 24))
        images.append(image)

    counter = 0
    pos_x = 100
    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == KEYDOWN:
                if event.key == K_LEFT:
                    pos_x -= 5
                elif event.key == K_RIGHT:
                    pos_x += 5

        SURFACE.fill((0, 0, 0))

        SURFACE.blit(images[counter % 2 + 0], (50, 50))
        SURFACE.blit(images[counter % 2 + 2], (100, 50))
        SURFACE.blit(images[counter % 2 + 4], (150, 50))
        SURFACE.blit(images[counter % 2 + 6], (200, 50))
        counter += 1

        SURFACE.blit(images[8], (pos_x, 150))

        pygame.display.update()
        FPSCLOCK.tick(5)

if __name__ == '__main__':
    main()
