# 보이는 윈도우들의 타이틀 및 경로를 받아온다
import win32gui, win32process, win32api, win32con


def GetProcessNameFromHwnd(hwnd):
    """ 실행된 프로세스 경로를 반환하는 함수 """
    threadpid, procpid = win32process.GetWindowThreadProcessId(hwnd)

    # PROCESS_QUERY_INFORMATION (0x0400) or PROCESS_VM_READ (0x0010) or PROCESS_ALL_ACCESS (0x1F0FFF)

    mypyproc = win32api.OpenProcess(win32con.PROCESS_ALL_ACCESS, False, procpid)
    procname = win32process.GetModuleFileNameEx(mypyproc, 0)
    return procname

def winEnumHandler( hwnd, ctx ):
    if win32gui.IsWindowVisible( hwnd ):
        print (hex(hwnd), win32gui.GetWindowText( hwnd ), GetProcessNameFromHwnd(hwnd))

win32gui.EnumWindows( winEnumHandler, None )