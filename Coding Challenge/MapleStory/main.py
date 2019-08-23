import pygame
import sys

pygame.init()

SURFACE = pygame.display.set_mode((800, 600))  # pygame.FULLSCREEN
pygame.key.set_repeat(5, 5)  # 키를 연속해서 입력받는 간격을 정함

pygame.display.set_caption("MypleStory")



FPSCLOCK = pygame.time.Clock()  # FPS 담당함 게임 속도 조절

background = pygame.image.load('Element\\Map0\\000020000\\map.png')
BGM = pygame.mixer.music.load('Element\\Sound\\Bgm00\\GoPicnic.mp3')
pygame.mixer.music.play(-1)  # 몇번 재생할꺼냐에서 -1의 경우 무한히 재생(배경음악)


class Environment(object):
    """ 환경적 요소, 맵과 캐릭터간의 충돌 등 처리"""
    def __init__(self):
        self.boards = [((0, 425), (430, 425)), ((430, 425), (530, 360)), ((530, 360), (800, 360))]
        self.gravity = 3
# (self.boards[1][1][1] - self.boards[1][0][1]) / (self.boards[1][1][0] - self.boards[1][0][0])
    def collision(self, person):

        for board in self.boards:
            if board[0][0] <= person.x and board[1][0] >= person.x:
                if board[0][1] == board[1][1] and board[0][1] - person.height <= person.y:
                    person.y = board[0][1] - person.height
                    return
                else:
                    slope = int((board[1][1] - board[0][1]) / (board[1][0] - board[0][0]) * (person.x - board[0][0]) + \
                            board[0][1])
                    if slope - person.height <= person.y:
                        person.y = slope - person.height
                        return

        person.y += self.gravity


    def draw(self):
        pygame.draw.line(SURFACE, (255, 0, 0), (0, 425), (430, 425))
        pygame.draw.line(SURFACE, (255, 0, 0), (430, 425), (530, 360))
        pygame.draw.line(SURFACE, (255, 0, 0), (530, 360), (800, 360))

class Player(object):
    def __init__(self, x, y, head_code='00012000', body_code='00002000'):
        # 캐릭터 행동을 위한 변수
        self.x = x
        self.y = y
        self.speed = 3  # 캐릭터 속도
        self.width = 30
        self.height = 60  # 캐릭터 시작 x, y 좌표 및 너비 높이
        self.jump = 5  # 최대 점프 높이
        self.direction = True  # True : 왼쪽, False : 오른쪽
        self.state = 0  # 0:stand 1:walk 2:jump
        self.standCount = 0
        self.walkCount = 0
        self.jumpCount = 10
        self.hitbox = pygame.Rect((self.x, self.y), (40, 64))  # 캐릭터 collider처리 사각형
        self.hitbox_visible = True  # 경계가 보이게 할꺼냐 개발전용 상수

        # 코드 저장하는 변수
        self.head_code = head_code
        self.body_code = body_code
        # 이미지 저장하는 변수
        self.head_front = None
        self.head_back = None
        self.body_stand_left = None
        self.body_stand_right = None
        self.body_jump_left = None
        self.body_jump_right = None
        self.body_move_left = None
        self.body_move_right = None

        self.reload_image(self.head_code, self.body_code)

    def reload_image(self, head_code, body_code):
        """ 이미지 요소를 새롭게 로드 또는 초기화 하는 함수 """
        self.head_front = []
        self.head_front.append(pygame.image.load('Element\\Character\\Person\\head\\' + head_code + '\\' + head_code + '.img.front.head.png'))
        self.head_front.append(pygame.transform.flip(self.head_front[0], True, False))
        self.head_back = pygame.image.load('Element\\Character\\Person\\head\\' + head_code + '\\' + head_code + '.img.back.head.png')
        self.body_stand_left = [
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.0.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.1.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.2.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.0.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.1.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\stand\\' + body_code + '.img.stand1.2.arm.png')
        ]
        self.body_stand_right = []
        for body in self.body_stand_left:
            self.body_stand_right.append(pygame.transform.flip(body, True, False))

        self.body_jump_left = [
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\jump\\' + body_code + '.img.jump.0.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\jump\\' + body_code + '.img.jump.0.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\jump\\' + body_code + '.img.jump.0.rHand.png'),
        ]

        self.body_jump_right = [
            pygame.transform.flip(self.body_jump_left[0], True, False),
            pygame.transform.flip(self.body_jump_left[1], True, False),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\jump\\' + body_code + '.img.jump.0.lHand.png')
        ]

        self.body_move_left = [
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.0.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.1.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.2.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.3.body.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.0.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.1.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.2.arm.png'),
            pygame.image.load('Element\\Character\\Person\\body\\' + body_code + '\\walk1\\' + body_code + '.img.walk1.3.arm.png')
        ]

        self.body_move_right = []
        for body in self.body_move_left:
            self.body_move_right.append(pygame.transform.flip(body, True, False))

    def draw(self):
        """ 모션에 따라 캐릭터를 그리는 함수"""

        # 가만히 서 있는 상태
        if self.state == 0:
            if self.standCount >= 150:
                self.standCount = 0

            if self.direction:  # 왼쪽 일때
                index = self.standCount // 50
                SURFACE.blit(self.body_stand_left[index], (self.x + 7, self.y + 32))  # 몸 그리기
                SURFACE.blit(self.body_stand_left[index + 3], (self.x + 23, self.y + 32))  # 팔 그리기
                SURFACE.blit(self.head_front[0], (self.x, self.y))  # 머리 그리기
            else:  # 오른쪽 일때
                index = self.standCount // 50
                SURFACE.blit(self.body_stand_right[index], (self.x + 7, self.y + 32))  # 몸 그리기
                SURFACE.blit(self.body_stand_right[index + 3], (self.x + 5, self.y + 32))  # 팔 그리기
                SURFACE.blit(self.head_front[1], (self.x, self.y))  # 머리 그리기
            self.standCount += 1

        # 걷는 상태
        elif self.state == 1:
            if self.walkCount >= 20:
                self.walkCount = 0
            index = self.walkCount // 5

            if self.direction:
                SURFACE.blit(self.body_move_left[index], (self.x + 3, self.y + 31))  # 몸 그리기
                SURFACE.blit(self.body_move_left[index + 4], (self.x + 16, self.y + 31))  # 팔 그리기
                SURFACE.blit(self.head_front[0], (self.x, self.y))  # 머리 그리기
            else:
                SURFACE.blit(self.body_move_right[index], (self.x + 7, self.y + 31))  # 몸 그리기
                SURFACE.blit(self.body_move_right[index + 4], (self.x + 8, self.y + 31))  # 팔 그리기
                SURFACE.blit(self.head_front[1], (self.x, self.y))  # 머리 그리기
            self.walkCount+=1

        # 점프하는 상태
        elif self.state == 2:
            if self.direction:  # 왼쪽 일 때
                SURFACE.blit(self.body_jump_left[0], (self.x, self.y + 32))  # 몸 그리기
                SURFACE.blit(self.head_front[0], (self.x, self.y))  # 머리 그리기
                SURFACE.blit(self.body_jump_left[1], (self.x + 18, self.y + 32))  # 팔 그리기
                SURFACE.blit(self.body_jump_left[2], (self.x + 4, self.y + 36))  # 손 그리기
            else:  # 오른쪽 일 때
                SURFACE.blit(self.body_jump_right[0], (self.x, self.y + 32))  # 몸 그리기
                SURFACE.blit(self.head_front[1], (self.x, self.y))  # 머리 그리기
                SURFACE.blit(self.body_jump_right[1], (self.x + 6, self.y + 32))  # 팔 그리기
                SURFACE.blit(self.body_jump_right[2], (self.x + 23, self.y + 36))  # 손 그리기



        if self.hitbox_visible:
            pygame.draw.rect(SURFACE, (255, 0, 0), self.hitbox, 2)
        self.hitbox.x = self.x - 2
        self.hitbox.y = self.y


# ####  main loop  ####
font = pygame.font.SysFont('comicsans', 30, True)
player = Player(50, 500, '00012000', '00002000')
env = Environment()
while True:
    FPSCLOCK.tick(30)  # 30프레임으로 설정
    env.draw()
    env.collision(player)
    player.draw()
    pygame.display.update()
    SURFACE.blit(background, (0, 0))
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit(0)

    keys = pygame.key.get_pressed()  # 눌러져 있는 키를 리스트 형태로 받아옴

    if keys[pygame.K_q]:
        pygame.quit()
        sys.exit(0)

    if keys[pygame.K_LALT]:  # Alt 점프키 누른거 처리
        player.state = 2
    elif keys[pygame.K_LEFT] and player.x > player.width:  # 왼쪽 키 누른거 처리
        player.x -= player.speed
        player.direction = True
        if player.state != 2:
            player.state = 1
    elif keys[pygame.K_RIGHT] and player.x < 600 - player.width:  # 오른쪽 키 누른거 처리
        player.x += player.speed
        player.direction = False
        if player.state != 2:
            player.state = 1
    else:
        player.walkCount = 0

    if player.state == 2:
        if player.jumpCount >= -10:
            neg = 1
            if player.jumpCount < 0:
                neg = -1
            player.y -= int(player.jumpCount * player.jumpCount * 0.5 * neg)
            player.jumpCount -= 1
        else:
            player.state = 0
            player.jumpCount = 10


pygame.quit()