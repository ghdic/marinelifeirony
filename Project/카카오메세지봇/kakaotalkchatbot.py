import time, win32con, win32api, win32gui
import ctypes
from clipboard import ClipBoard


class KakaoTalkChatBot:
    def __init__(self):
        self.room_open_delay = 1  # 채팅방 열때 딜레이
        self.room_close_delay = 1  # 채팅방 닫을때 딜레이
        self.room_search_dealy = 1  # 채팅방 검색 딜레이
        self.send_message_delay = 0.5  # 메세지 보내기 딜레이
        self.copy_message_delay = 1  # 메세지 카피 딜레이

        self.PBYTE256 = ctypes.c_ubyte * 256
        self._user32 = ctypes.WinDLL("user32")
        self.GetKeyboardState = self._user32.GetKeyboardState
        self.SetKeyboardState = self._user32.SetKeyboardState
        self.PostMessage = win32api.PostMessage
        self.SendMessage = win32gui.SendMessage
        self.FindWindow = win32gui.FindWindow
        self.IsWindow = win32gui.IsWindow
        self.GetCurrentThreadId = win32api.GetCurrentThreadId
        self.GetWindowThreadProcessId = self._user32.GetWindowThreadProcessId
        self.AttachThreadInput = self._user32.AttachThreadInput

        self.MapVirtualKeyA = self._user32.MapVirtualKeyA
        self.MapVirtualKeyW = self._user32.MapVirtualKeyW

        self.MakeLong = win32api.MAKELONG
        self.w = win32con

    def send_msg(self, text, chat_room_name):
        """ 메세지 보내기 """
        # HWND FindWindowEx(
        #     HWND hWndParent, HWND hWndChildAfter, LPCWSTR lpszClass, LPCWSTR lpszWindow
        # ); 부모 핸들값, 탐색의 시작이 되는 윈도우 핸들 값(A->B->C 일때 A핸들을 넘기면 B부터 탐색), 윈도우 캡션(무조건 일치시 None)
        hwndMain = win32gui.FindWindow(None, chat_room_name)  # 해당하는 이름의 채팅 창 찾음
        hwndEdit = win32gui.FindWindowEx(hwndMain, None, "RichEdit50W", None)  # 메인 카카오톡 창의 메세지 입력부분
        win32api.SendMessage(hwndEdit, win32con.WM_SETTEXT, 0, text)  # 메세지를 입력
        self.send_return(hwndEdit)   # 입력
        time.sleep(self.send_message_delay)

    @staticmethod
    def send_return(hwnd):
        """ 엔터키 입력 """
        win32api.PostMessage(hwnd, win32con.WM_KEYDOWN, win32con.VK_RETURN, 0)
        time.sleep(0.01)
        win32api.PostMessage(hwnd, win32con.WM_KEYUP, win32con.VK_RETURN, 0)

    @staticmethod
    def check_open(chat_room_name):
        """ 채팅방이 열려있는지 확인, 열려있는경우 핸들번호, 닫혀있는 경우 0 반환 """
        hwndchat_room = win32gui.FindWindow(None, chat_room_name)
        return hwndchat_room

    def close_window(self, chat_room_name):
        """ 윈도우를 닫는다 """
        hwndchat_room = win32gui.FindWindow(None, chat_room_name)
        win32gui.CloseWindow(hwndchat_room)
        time.sleep(self.room_close_delay)

    def refresh_window(self, chat_room_name):
        """ 쌓이는 메세지를 한번 초기화 해준다(너무 많이 쌓이면 랙걸림) """
        self.close_window(chat_room_name)
        self.open_chat_room(chat_room_name)

    def open_chat_room(self, chat_room_name, kind="채팅방"):
        """ 채팅방 열기, kind - {연락처, 채팅방} 중에 어디서 검색할지 선택 default 대화방, !!대화방 검색 안되는 경우 모바일로 검색되는 이름으로 바꾸기(검색에 버그 존재)!! """
        # # 채팅방 목록 검색하는 Edit (채팅방이 열려있지 않아도 전송 가능하기 위하여)
        hwndkakao = win32gui.FindWindow(None, "카카오톡")
        hwndkakao_edit1 = win32gui.FindWindowEx(hwndkakao, None, "EVA_ChildWindow", None)
        hwndkakao_edit2_1 = win32gui.FindWindowEx(hwndkakao_edit1, None, "EVA_Window", None)
        hwndkakao_edit2_2 = win32gui.FindWindowEx(hwndkakao_edit1, hwndkakao_edit2_1, "EVA_Window", None)
        choice = {"연락처" : hwndkakao_edit2_1, "채팅방" : hwndkakao_edit2_2}
        hwndkakao_edit3 = win32gui.FindWindowEx(choice[kind], None, "Edit", None)

        # # Edit에 검색 _ 입력되어있는 텍스트가 있어도 덮어쓰기됨
        cnt = 0
        while not self.check_open(chat_room_name):  # 열릴때까지 반복
            win32api.SendMessage(hwndkakao_edit3, win32con.WM_SETTEXT, 0, "")  # 이미 같은 제목이 입력되어 있는 경우 창이 열리지 않는 버그를 막기 위해 초기화
            time.sleep(self.room_search_dealy)  # 텀을 주지 않으면 비우는게 의미 없다
            win32api.SendMessage(hwndkakao_edit3, win32con.WM_SETTEXT, 0, chat_room_name)
            time.sleep(self.room_search_dealy)   # 안정성 위해 필요
            self.send_return(hwndkakao_edit3)
            time.sleep(self.room_open_delay)
            cnt += 1
            if cnt == 5:
                raise Exception("해당하는 방의 이륾을 찾을 수 없습니다")

    def post_key_ex(self, hwnd, key, shift, specialkey):
        """ 조합키 사용하기 위한 함수 """
        if self.IsWindow(hwnd):

            ThreadId = self.GetWindowThreadProcessId(hwnd, None)

            lparam = self.MakeLong(0, self.MapVirtualKeyA(key, 0))
            msg_down = self.w.WM_KEYDOWN
            msg_up = self.w.WM_KEYUP

            if specialkey:
                lparam = lparam | 0x1000000

            if len(shift) > 0:  # 조합키가 있는 경우
                pKeyBuffers = self.PBYTE256()
                pKeyBuffers_old = self.PBYTE256()

                self.SendMessage(hwnd, self.w.WM_ACTIVATE, self.w.WA_ACTIVE, 0)
                self.AttachThreadInput(self.GetCurrentThreadId(), ThreadId, True)
                self.GetKeyboardState(ctypes.byref(pKeyBuffers_old))

                for mod_key in shift:
                    if mod_key == self.w.VK_MENU:
                        lparam = lparam | 0x20000000
                        msg_down = self.w.WM_SYSKEYDOWN
                        msg_up = self.w.WM_SYSKEYUP
                    pKeyBuffers[mod_key] |= 128

                self.SetKeyboardState(ctypes.byref(pKeyBuffers))
                time.sleep(0.01)
                self.PostMessage(hwnd, msg_down, key, lparam)
                time.sleep(0.01)
                self.PostMessage(hwnd, msg_up, key, lparam | 0xC0000000)
                time.sleep(0.01)
                self.SetKeyboardState(ctypes.byref(pKeyBuffers_old))
                time.sleep(0.01)
                self.AttachThreadInput(self.GetCurrentThreadId(), ThreadId, False)

            else:  # 조합키가 없는 경우 그냥 보냄
                self.SendMessage(hwnd, msg_down, key, lparam)
                self.SendMessage(hwnd, msg_up, key, lparam | 0xC0000000)

    def get_msg(self, chat_room_name):
        hwndMain = win32gui.FindWindow(None, chat_room_name)
        if hwndMain == 0:
            return 0
        hwndListControl = win32gui.FindWindowEx(hwndMain, None, 'EVA_VH_ListControl_Dblclk', None)

        self.post_key_ex(hwndListControl, ord('A'), [self.w.VK_CONTROL], False)
        time.sleep(self.copy_message_delay)
        self.post_key_ex(hwndListControl, ord('C'), [self.w.VK_CONTROL], False)
        return ClipBoard().get_clipboard_text()