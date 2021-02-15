""" asteroid.py - Copyright 2016 Kenichiro Tanaka """
import sys
from math import radians, sin, cos
from random import randint
import pygame
from pygame.locals import Rect, QUIT, KEYDOWN, KEYUP, \
    K_SPACE, K_LEFT, K_RIGHT, K_UP, K_DOWN

pygame.init()
pygame.key.set_repeat(5, 5)
SURFACE = pygame.display.set_mode((800, 800))
FPSCLOCK = pygame.time.Clock()

class Drawable:
    """ 전체의 그리기 객체의 부모 클래스 """
    def __init__(self, rect):
        self.rect = rect
        self.step = [0, 0]

    def move(self):
        """ 그리기 대상을 이동한다 """
        rect = self.rect.center
        xpos = (rect[0] + self.step[0]) % 800
        ypos = (rect[1] + self.step[1]) % 800
        self.rect.center = (xpos, ypos)

class Rock(Drawable):
    """ 운석 객체 """
    def __init__(self, pos, size):
        super(Rock, self).__init__(Rect(0, 0, size, size))
        self.rect.center = pos
        self.image = pygame.image.load("rock.png")
        self.theta = randint(0, 360)
        self.size = size
        self.power = 128 / size
        self.step[0] = cos(radians(self.theta)) * self.power
        self.step[1] = sin(radians(self.theta)) * -self.power

    def draw(self):
        """ 운석을 그린다 """
        rotated = pygame.transform.rotozoom(self.image,\
            self.theta, self.size / 64)
        rect = rotated.get_rect()
        rect.center = self.rect.center
        SURFACE.blit(rotated, rect)

    def tick(self):
        """ 운석을 이동한다 """
        self.theta += 3
        self.move()

class Shot(Drawable):
    """ 총알 오브젝트 """
    def __init__(self):
        super(Shot, self).__init__(Rect(0, 0, 6, 6))
        self.count = 40
        self.power = 10
        self.max_count = 40

    def draw(self):
        """ 총알을 그린다 """
        if self.count < self.max_count:
            pygame.draw.rect(SURFACE, (225, 225, 0), self.rect)

    def tick(self):
        """ 총알을 이동한다 """
        self.count += 1
        self.move()

class Ship(Drawable):
    """ 내 캐릭터 객체 """
    def __init__(self):
        super(Ship, self).__init__(Rect(355, 370, 90, 60))
        self.theta = 0
        self.power = 0
        self.accel = 0
        self.explode = False
        self.image = pygame.image.load("ship.png")
        self.bang = pygame.image.load("bang.png")

    def draw(self):
        """ 내 캐릭터를 그린다 """
        rotated = pygame.transform.rotate(self.image, self.theta)
        rect = rotated.get_rect()
        rect.center = self.rect.center
        SURFACE.blit(rotated, rect)
        if self.explode:
            SURFACE.blit(self.bang, rect)

    def tick(self):
        """ 내 캐릭터를 움직인다 """
        self.power += self.accel
        self.power *= 0.94
        self.accel *= 0.94
        self.step[0] = cos(radians(self.theta)) * self.power
        self.step[1] = sin(radians(self.theta)) * -self.power
        self.move()

def key_event_handler(keymap, ship):
    """ 키 이벤트를 처리한다 """
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == KEYDOWN:
            if not event.key in keymap:
                keymap.append(event.key)
        elif event.type == KEYUP:
            keymap.remove(event.key)

    if K_LEFT in keymap:
        ship.theta += 5
    elif K_RIGHT in keymap:
        ship.theta -= 5
    elif K_UP in keymap:
        ship.accel = min(5, ship.accel + 0.2)
    elif K_DOWN in keymap:
        ship.accel = max(-5, ship.accel - 0.1)

def main():
    """ 메인 루틴 """
    sysfont = pygame.font.SysFont(None, 72)
    scorefont = pygame.font.SysFont(None, 36)
    message_clear = sysfont.render("!!CLEARED!!",
                                   True, (0, 255, 225))
    message_over = sysfont.render("GAME OVER!!",
                                  True, (0, 255, 225))
    message_rect = message_clear.get_rect()
    message_rect.center = (400, 400)

    keymap = []
    shots = []
    rocks = []
    ship = Ship()
    game_over = False
    score = 0
    back_x, back_y = 0, 0
    back_image = pygame.image.load("bg.png")
    back_image = pygame.transform.scale2x(back_image)

    while len(shots) < 7:
        shots.append(Shot())

    while len(rocks) < 4:
        pos = randint(0, 800), randint(0, 800)
        rock = Rock(pos, 64)
        if not rock.rect.colliderect(ship.rect):
            rocks.append(rock)

    while True:
        key_event_handler(keymap, ship)

        if not game_over:
            ship.tick()

            # 운석을 이동
            for rock in rocks:
                rock.tick()
                if rock.rect.colliderect(ship.rect):
                    ship.explode = True
                    game_over = True

            # 총알을 이동
            fire = False
            for shot in shots:
                if shot.count < shot.max_count:
                    shot.tick()

                    # 총알과 운석의 충돌 처리
                    hit = None
                    for rock in rocks:
                        if rock.rect.colliderect(shot.rect):
                            hit = rock
                    if hit != None:
                        score += hit.rect.width * 10
                        shot.count = shot.max_count
                        rocks.remove(hit)
                        if hit.rect.width > 16:
                            rocks.append(Rock(hit.rect.center,
                                              hit.rect.width / 2))
                            rocks.append(Rock(hit.rect.center,
                                              hit.rect.width / 2))
                        if len(rocks) == 0:
                            game_over = True

                elif not fire and K_SPACE in keymap:
                    shot.count = 0
                    shot.rect.center = ship.rect.center
                    shot_x = shot.power * cos(radians(ship.theta))
                    shot_y = shot.power * -sin(radians(ship.theta))
                    shot.step = (shot_x, shot_y)
                    fire = True

        # 배경 그리기
        back_x = (back_x + ship.step[0] / 2) % 1600
        back_y = (back_y + ship.step[1] / 2) % 1600
        SURFACE.fill((0, 0, 0))
        SURFACE.blit(back_image, (-back_x, -back_y),
                     (0, 0, 3200, 3200))

        # 각종 객체를 그리기
        ship.draw()
        for shot in shots:
            shot.draw()
        for rock in rocks:
            rock.draw()

        # 점수 나타내기
        score_str = str(score).zfill(6)
        score_image = scorefont.render(score_str, True,
                                       (0, 255, 0))
        SURFACE.blit(score_image, (700, 10))

        # 메시지 나타내기
        if game_over:
            if len(rocks) == 0:
                SURFACE.blit(message_clear, message_rect.topleft)
            else:
                SURFACE.blit(message_over, message_rect.topleft)

        pygame.display.update()
        FPSCLOCK.tick(20)

if __name__ == '__main__':
    main()
