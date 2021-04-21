import turtle
import math
turtle.shape('turtle')


class Myturtle:
    def __init__(self, turtle, speed=2, angle=0):
        self.turtle = turtle
        self.speed = speed
        self.angle = angle
        self.turtle.speed(speed)
        self.turtle.setheading(angle)

    def __del__(self):
        self.turtle.mainloop()

    def draw_triangle(self, size):
        """ 정삼각형 그리기 """
        for i in range(3):
            self.turtle.forward(size)
            self.turtle.right(120)

    def draw_square(self, size):
        """ 정사각형 그리기 """
        for i in range(4):
            self.turtle.forward(size)
            self.turtle.right(90)

    def draw_polygon(self, size, cnt):
        """ 다각형 그리기 """
        for i in range(cnt):
            self.turtle.forward(size)
            self.turtle.right(360 / cnt)

    def draw_circle(self, size):
        """ 원 그리기 """
        self.turtle.circle(size)

    def draw_star(self, size):
        """ 별 그리기 """
        for i in range(5):
            self.turtle.forward(size)
            self.turtle.right(144)

    def draw_triangle_recursive(self, size, depth):
        """ 재귀적인 삼각형 그리기 """
        if depth == 0: return
        self.draw_triangle(size)
        self.turtle.forward(size/2)
        self.turtle.right(60)
        self.draw_triangle_recursive(size/2, depth - 1)

    def draw_polygon_recursive(self, size, cnt, depth):
        """ 재귀적인 다각형 그리기 """
        if depth == 0: return
        self.draw_polygon(size, cnt)
        self.turtle.forward(size/2)
        self.turtle.right(180 / cnt)
        self.draw_polygon_recursive(size*math.cos(math.radians((180-180*(cnt - 2)/cnt)/2)), cnt, depth - 1)

    def draw_snow_recursive(self, size, cnt, scale, depth):
        """ 눈꽃 그리기 """
        if depth==0: return
        for i in range(cnt):
            self.turtle.forward(size)
            self.draw_snow_recursive(size*scale, cnt, scale, depth-1)
            self.turtle.backward(size)
            self.turtle.right(360/cnt)

    def fill_color_start(self, color):
        self.turtle.fillcolor(color)
        self.turtle.begin_fill()

    def fill_color_end(self):
        self.turtle.end_fill()

    def reset(self):
        """ 초기 상태로 되돌림 """
        self.turtle.reset()
        self.turtle.speed(self.speed)
        self.turtle.setheading(self.angle)

    @staticmethod
    def draw_repeat(size, scale, angle, cnt, draw_shape):
        """ 반복해서 일정각도를 틀며 도형을 그리는 함수 """
        for i in range(cnt):
            draw_shape(size)
            turtle.right(angle / cnt)
            size *= scale


# myturtle = Myturtle(turtle, 2, -135)
# myturtle.draw_repeat(200, 0.8, 120, 10, myturtle.draw_square)

def four_square(size, myturtle):
    for i in range(4):
        myturtle.draw_square(size)
        turtle.right(90)


myturtle = Myturtle(turtle, 10, -180)
four_square(100, myturtle)
turtle.right(45)
four_square(100, myturtle)

###########################################################
# import turtle
# turtle.shape('turtle')
#
# def draw_rectangle(size):
#     for i in range(4):
#         turtle.forward(size)
#         turtle.right(90)
#
#
# def four_rectangle(size):
#     for i in range(4):
#         draw_rectangle(size)
#         turtle.right(90)
#
# turtle.speed(10)
# turtle.setheading(-180)
# four_rectangle(100)
# turtle.right(45)
# four_rectangle(100)
# turtle.mainloop()
