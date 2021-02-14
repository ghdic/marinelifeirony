from PyQt5 import QtCore
from PyQt5.QtWidgets import QWidget, QApplication, QTableWidget, QTableWidgetItem, QVBoxLayout, QHBoxLayout
from PyQt5.QtGui import QPainter
import random
import sys


class MineSweeper():
    def __init__(self, rowCount, columnCount, bombCount):
        self.manger = Manager(rowCount, columnCount, bombCount)
        self.app = QApplication(sys.argv)
        self.gui = GUI(rowCount, columnCount)
        sys.exit(self.app.exec())


class Manager():
    """ 게임 데이터 관리 """
    BombNeighborRole = QtCore.Qt.UserRole #
    IsBombRole = QtCore.Qt.UserRole + 1
    IsRevealedRole = QtCore.Qt.UserRole + 2
    IsMarkedRole = QtCore.Qt.UserRole + 3
    direct = [[-1, -1], [0, -1], [1, -1],
           [-1, 0], [1, 0],
           [-1, 1], [0, 1], [1, 1]] # 상하좌우대각

    gameWin = QtCore.pyqtSignal()
    gameOver = QtCore.pyqtSignal()

    def __init__(self, rowCount, columnCount, bombCount):
        self._rowCount = rowCount
        self._columnCount = columnCount
        self._bombCount = bombCount
        self._revealedCount = 0
        self._countToWin = rowCount * columnCount - bombCount

        self._items = [list() for _ in range(rowCount)]
        for row in range(rowCount):
            for column in range(columnCount):
                item = MinesweeperItem(row, column)
                self._items[row].append(item)
        bombPos = random.sample([x for x in range(rowCount*columnCount)], bombCount) # unique한 bombCount개의 폭탄 좌표를 구함
        for bomb in bombPos:
            row = bomb // columnCount
            col = bomb % columnCount
            self._items[row][col].isBomb = True
            self.bombNeighbors(row, col)

    def bombNeighbors(self, row, col):
        """ 폭탄에 인접한 블록에 카운트 늘려줌 """
        for x, y in self.direct:
            nx, ny = col + x, row + y
            if nx < 0 or ny < 0 or nx >= self._columnCount or ny >= self._rowCount:
                continue
            self._items[ny][nx].bombNeighborCount += 1


class MinesweeperItem(object):
    """ 지뢰찾기 각 블록 """
    def __init__(self, row, column):
        self.row = row
        self.column = column
        self._isBomb = False  # private
        self._bombNeighborCount = 0
        self._isMarked = False
        self._isRevealed = False

    @property
    def bombNeighborCount(self): # getter
        return self._bombNeighborCount

    @bombNeighborCount.setter # setter
    def bombNeighborCount(self, newCount):
        self._bombNeighborCount = newCount

    @property
    def isBomb(self):
        return self._isBomb

    @isBomb.setter
    def isBomb(self, newVal):
        self._isBomb = newVal

    @property
    def isMarked(self):
        return self._isMarked

    @isMarked.setter
    def isMarked(self, newVal):
        self._isMarked = newVal

    @property
    def isRevealed(self):
        return self._isRevealed

    @isRevealed.setter
    def isRevealed(self, newVal):
        self._isRevealed = newVal

class GUI(QWidget):

    def __init__(self, rowCount, columnCount):
        super().__init__()
        self.table = QTableWidget(rowCount, columnCount)
        self.table.verticalHeader().hide()
        self.table.horizontalHeader().hide()
        self.table.horizontalHeader().setDefaultSectionSize(self.table.verticalHeader().defaultSectionSize())
        self.table.resize(
            self.table.horizontalHeader().length() + 6,
            self.table.verticalHeader().length() + 6,
        )


        self.table.setItem(1, 1, QTableWidgetItem("Name"))

        self.table.cellClicked.connect(self.cell_clicked)

        self.vBoxLayout = QVBoxLayout()
        self.vBoxLayout.addWidget(self.table)
        self.setLayout(self.vBoxLayout)

        self.show()

    @QtCore.pyqtSlot(int, int)
    def cell_clicked(self, row, col):
        print(row, col)

MineSweeper(10, 10, 10)

