# 프로그램 제목을 입력하면 그 프로그램이 맨 위로 오게함
import win32gui
import re

class WindowMgr:
    def __init__ (self):
        self._handle = None

    def find_window(self, class_name, window_name=None):
        self._handle = win32gui.FindWindow(class_name, window_name)

    def _window_enum_callback(self, hwnd, wildcard):
        if re.match(wildcard, str(win32gui.GetWindowText(hwnd))) is not None:
            self._handle = hwnd

    def find_window_wildcard(self, wildcard):
        self._handle = None
        win32gui.EnumWindows(self._window_enum_callback, wildcard)

    def set_foreground(self):
        win32gui.SetForegroundWindow(self._handle)

try:
    w = WindowMgr()
    w.find_window_wildcard(".*카카오톡.*")  # 프로그램 제목 입력
    w.set_foreground()
except:
    print("잘못된 프로그램 이름입니다 다시 입력해주세요")




