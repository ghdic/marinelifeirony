# 기본 예제
import kakao
import os

class Myclass(kakao.Client):
    async def on_ready(self):
        print("Logged on")

    async def on_message(self, chat):
        if "ㅋ" in chat.message:
            await chat.reply("웃지마!!!!!")



kakao.check_reg(os.environ['kakao_id'], os.environ['kakao_pw']) # 첫 로그인시 인증코드 입력
client = Myclass(os.environ['kakao_id'], os.environ['kakao_pw'])
client.run()
