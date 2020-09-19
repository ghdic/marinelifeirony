#!/usr/bin/env python
# coding: utf-8

# 예제 내용
# * 기본 위젯을 사용하여 기본 창을 생성
# * Layout 을 이용하여 위젯을 배치
# * Layout 배치시 정렬 설정

import sys

from PyQt5.QtWidgets import QWidget
from PyQt5.QtWidgets import QLabel
from PyQt5.QtWidgets import QBoxLayout

from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import Qt

__author__ = "Deokyu Lim <hong18s@gmail.com>"


class Form(QWidget):
    def __init__(self):
        QWidget.__init__(self, flags=Qt.Widget)

        # 배치될 위젯 변수 선언
        self.lb_1 = QLabel()
        self.lb_2 = QLabel()
        self.lb_3 = QLabel()
        self.lb_4 = QLabel()
        self.lb_5 = QLabel()

        # 레이아웃 선언 및 Form Widget에 설정
        self.layout_1 = QBoxLayout(QBoxLayout.LeftToRight, self)
        self.setLayout(self.layout_1)
        self.init_widget()

    def init_widget(self):
        self.setWindowTitle("Layout Basic")
        self.setFixedWidth(640)
        self.setFixedHeight(480)

        self.lb_1.setText("Label 1")
        self.lb_2.setText("Label 2")
        self.lb_3.setText("Label 3")
        self.lb_4.setText("Label 4")
        self.lb_5.setText("Label 5")

        self.lb_1.setStyleSheet("background-color: yellow")
        self.lb_2.setStyleSheet("background-color: red")
        self.lb_3.setStyleSheet("background-color: blue")
        self.lb_4.setStyleSheet("background-color: pink")
        self.lb_5.setStyleSheet("background-color: grey")

        self.layout_1.addWidget(self.lb_1)
        self.layout_1.addWidget(self.lb_2, alignment=Qt.AlignTop)
        self.layout_1.addWidget(self.lb_3, alignment=Qt.AlignBottom)
        self.layout_1.addWidget(self.lb_4, alignment=Qt.AlignVCenter)
        self.layout_1.addWidget(self.lb_5, alignment=Qt.AlignHCenter)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    form = Form()
    form.show()
    exit(app.exec_())
