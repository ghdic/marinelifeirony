# 좌우로 방향을 바꾸고, 상하로 앞뒤로 이동가능하다. 스페이스바로 미사일을 발사하며 운석을 모두 파괴하는 게임

import sys
from math import radians, sin, cos
from random import randint
import pygame
from pygame.locals import Rect, QUIT, KEYDOWN, KEYUP, \
    K_SPACE, K_LEFT, K_RIGHT, K_UP, K_DOWN, FULLSCREEN

pygame.init()
pygame.key.set_repeat(5, 5)
SURFACE = pygame.display.set_mode((800, 800))
FPSCLOCK = pygame.time.Clock()

class Drawable:
    """ 전체의 그리기 객체의 부모 클래스 """
    def __init__(self, rect):
        self.rect = rect  # 직사각형 위치 크기
        self.step = [0, 0]  # 한 프레임에서 이동하는 양

    def move(self):  # step만큼 움직임
        """ 그리기 대상을 이동한다 """
        rect = self.rect.center
        xpos = (rect[0] + self.step[0]) % 800  # 경계 넘어가면 반대쪽으로
        ypos = (rect[1] + self.step[1]) % 800
        self.rect.center = (xpos, ypos)

class Rock(Drawable):
    """ 운석 객체 """
    def __init__(self, pos, size):
        super(Rock, self).__init__(Rect(0, 0, size, size))  # 부모 클래스 초기화
        self.rect.center = pos
        self.image = pygame.image.load("rock.png")
        self.theta = randint(0, 360)  # 움직이는 각도 설정
        self.size = size  # 운석의 크기
        self.power = 128 / size  # 운석이 작아질수록 더 빨라짐
        self.step[0] = cos(radians(self.theta)) * self.power  # 이동하는 양
        self.step[1] = sin(radians(self.theta)) * -self.power

    def draw(self):
        """ 운석을 그린다 """
        rotated = pygame.transform.rotozoom(self.image,\
                self.theta, self.size / 64)  # Surface, 회전 각도, 배율 지정
        rect = rotated.get_rect()
        rect.center = self.rect.center  # 중심을 기준으로 움직이기 때문에 center 값을 받아옴
        SURFACE.blit(rotated, rect)

    def tick(self):
        """ 운석을 이동한다 """
        self.theta += 3
        self.move()

class Shot(Drawable):
    """ 총알 오브젝트 """
    def __init__(self):
        super(Shot, self).__init__(Rect(0, 0, 6, 6))
        self.count = 40  # 총알이 얼마나 진행했는지 나타내는 카운터
        self.power = 10  # 총알 속도
        self.max_count = 40  # 총알 최대 도달 거리

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
        self.theta = 0  # 캐릭터 방향
        self.power = 0  # 속도
        self.accel = 0  # 가속도
        self.explode = False  # 폭발 여부
        self.image = pygame.image.load("ship.png")
        self.bang = pygame.image.load("bang.png")  # 폭발이미지

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
            keymap.remove(event.key)  # 키를 땔때 지우며 누를 키 중 우선권을 주는 기법?

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
                                   True, (0, 255, 255))
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

                    # 총알과 운석의 충돌 거리
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

        # 메세지 나타내기
        if game_over:
            if len(rocks) == 0:
                SURFACE.blit(message_clear, message_rect.topleft)
            else:
                SURFACE.blit(message_over, message_rect.topleft)

        pygame.display.update()
        FPSCLOCK.tick(20)

if __name__ == '__main__':
    main()