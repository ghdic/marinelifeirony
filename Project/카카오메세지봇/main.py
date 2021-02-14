import time, win32con, win32api, win32gui
import ctypes
from clipboard import ClipBoard

kakao_opentalk_name = '두목의 미국주식방'  # 톡방 이름
room_open_delay = 1  # 채팅방 열때 딜레이
room_search_dealy = 1  # 채팅방 검색 딜레이
send_message_delay = 0.5  # 메세지 보내기 딜레이
copy_message_delay = 1  # 메세지 카피 딜레이

PBYTE256 = ctypes.c_ubyte * 256
_user32 = ctypes.WinDLL("user32")
GetKeyboardState = _user32.GetKeyboardState
SetKeyboardState = _user32.SetKeyboardState
PostMessage = win32api.PostMessage
SendMessage = win32gui.SendMessage
FindWindow = win32gui.FindWindow
IsWindow = win32gui.IsWindow
GetCurrentThreadId = win32api.GetCurrentThreadId
GetWindowThreadProcessId = _user32.GetWindowThreadProcessId
AttachThreadInput = _user32.AttachThreadInput

MapVirtualKeyA = _user32.MapVirtualKeyA
MapVirtualKeyW = _user32.MapVirtualKeyW

MakeLong = win32api.MAKELONG
w = win32con

def kakao_sendtext(text):
    """ 메세지 보내기 """
    # HWND FindWindowEx(
    #     HWND hWndParent, HWND hWndChildAfter, LPCWSTR lpszClass, LPCWSTR lpszWindow
    # ); 부모 핸들값, 탐색의 시작이 되는 윈도우 핸들 값(A->B->C 일때 A핸들을 넘기면 B부터 탐색), 윈도우 캡션(무조건 일치시 None)
    hwndMain = win32gui.FindWindow(None, kakao_opentalk_name)  # 해당하는 이름의 채팅 창 찾음
    hwndEdit = win32gui.FindWindowEx(hwndMain, None, "RichEdit50W", None)  # 메인 카카오톡 창의 메세지 입력부분
    # hwndListControl = win32gui.FindWindowEx(hwndMain, None, "EVA_VH_ListControl_Dblclk", None)  # 기본 카톡창
    win32api.SendMessage(hwndEdit, win32con.WM_SETTEXT, 0, text)  # 메세지를 입력
    SendReturn(hwndEdit)   # 입력
    time.sleep(send_message_delay)


def SendReturn(hwnd):
    """ 엔터키 입력 """
    win32api.PostMessage(hwnd, win32con.WM_KEYDOWN, win32con.VK_RETURN, 0)
    time.sleep(0.01)
    win32api.PostMessage(hwnd, win32con.WM_KEYUP, win32con.VK_RETURN, 0)


def open_chatroom(chatroom_name, kind="채팅방"):
    """ 채팅방 열기, kind - {연락처, 채팅방} 중에 어디서 검색할지 선택 default 대화방, !!대화방 검색 안되는 경우 모바일로 검색되는 이름으로 바꾸기(검색에 버그 존재)!! """
    # # 채팅방 목록 검색하는 Edit (채팅방이 열려있지 않아도 전송 가능하기 위하여)
    hwndkakao = win32gui.FindWindow(None, "카카오톡")
    hwndkakao_edit1 = win32gui.FindWindowEx(hwndkakao, None, "EVA_ChildWindow", None)
    hwndkakao_edit2_1 = win32gui.FindWindowEx(hwndkakao_edit1, None, "EVA_Window", None)
    hwndkakao_edit2_2 = win32gui.FindWindowEx(hwndkakao_edit1, hwndkakao_edit2_1, "EVA_Window", None)
    choice = {"연락처" : hwndkakao_edit2_1, "채팅방" : hwndkakao_edit2_2}
    hwndkakao_edit3 = win32gui.FindWindowEx(choice[kind], None, "Edit", None)

    # # Edit에 검색 _ 입력되어있는 텍스트가 있어도 덮어쓰기됨
    win32api.SendMessage(hwndkakao_edit3, win32con.WM_SETTEXT, 0, "")  # 이미 같은 제목이 입력되어 있는 경우 창이 열리지 않는 버그를 막기 위해 초기화
    time.sleep(room_search_dealy)  # 텀을 주지 않으면 비우는게 의미 없다
    win32api.SendMessage(hwndkakao_edit3, win32con.WM_SETTEXT, 0, chatroom_name)
    time.sleep(room_search_dealy)   # 안정성 위해 필요
    SendReturn(hwndkakao_edit3)
    time.sleep(room_open_delay)

def PostKeyEx(hwnd, key, shift, specialkey):
    if IsWindow(hwnd):

        ThreadId = GetWindowThreadProcessId(hwnd, None)

        lparam = MakeLong(0, MapVirtualKeyA(key, 0))
        msg_down = w.WM_KEYDOWN
        msg_up = w.WM_KEYUP

        if specialkey:
            lparam = lparam | 0x1000000

        if len(shift) > 0:  # 조합키가 있는 경우
            pKeyBuffers = PBYTE256()
            pKeyBuffers_old = PBYTE256()

            SendMessage(hwnd, w.WM_ACTIVATE, w.WA_ACTIVE, 0)
            AttachThreadInput(GetCurrentThreadId(), ThreadId, True)
            GetKeyboardState(ctypes.byref(pKeyBuffers_old))

            for modkey in shift:
                if modkey == w.VK_MENU:
                    lparam = lparam | 0x20000000
                    msg_down = w.WM_SYSKEYDOWN
                    msg_up = w.WM_SYSKEYUP
                pKeyBuffers[modkey] |= 128

            SetKeyboardState(ctypes.byref(pKeyBuffers))
            time.sleep(0.01)
            PostMessage(hwnd, msg_down, key, lparam)
            time.sleep(0.01)
            PostMessage(hwnd, msg_up, key, lparam | 0xC0000000)
            time.sleep(0.01)
            SetKeyboardState(ctypes.byref(pKeyBuffers_old))
            time.sleep(0.01)
            AttachThreadInput(GetCurrentThreadId(), ThreadId, False)

        else:  # 조합키가 없는 경우 그냥 보냄
            SendMessage(hwnd, msg_down, key, lparam)
            SendMessage(hwnd, msg_up, key, lparam | 0xC0000000)

def get_chatroom_msg():
    hwndMain = win32gui.FindWindow(None, kakao_opentalk_name)
    hwndListControl = win32gui.FindWindowEx(hwndMain, None, 'EVA_VH_ListControl_Dblclk', None)

    PostKeyEx(hwndListControl, ord('A'), [w.VK_CONTROL], False)
    time.sleep(copy_message_delay)
    PostKeyEx(hwndListControl, ord('C'), [w.VK_CONTROL], False)
    return ClipBoard().get_clipboard_text()

def main():
    open_chatroom(kakao_opentalk_name, "채팅방")
    text = "텍스트 전송3"
    # kakao_sendtext(text)  # 메세지 전송
    print(get_chatroom_msg())



main()