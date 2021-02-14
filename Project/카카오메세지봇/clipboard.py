from io import BytesIO
import win32clipboard
from PIL import Image


class ClipBoard:
    def send_to_clipboard(self, clip_type, data):
        """ 클립보드에 data setting """
        win32clipboard.OpenClipboard()
        win32clipboard.EmptyClipboard()
        win32clipboard.SetClipboardData(clip_type, data)
        win32clipboard.CloseClipboard()

    def get_clipboard_text(self):
        win32clipboard.OpenClipboard()
        data = win32clipboard.GetClipboardData()
        win32clipboard.CloseClipboard()
        return data

    def image_to_clipboard(self, filename):
        """ 이미지를 클립보드에 업로드 """
        image = Image.open(filename)
        output = BytesIO()
        image.convert("RGB").save(output, "BMP")
        data = output.getvalue()[14:]
        output.close()
        self.send_to_clipboard(win32clipboard.CF_DIB, data)