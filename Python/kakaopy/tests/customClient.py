from kakaopy.client import Client
import json
import random
from PIL import Image
import os
import time
from Crawler import Crawler

class CustomClient(Client):
    async def on_packet(self, packet):
        name = packet.packet_name
        body = packet.to_json_body()

    async def on_message(self, chat):
        # print("authorNickname ", chat.body['authorNickname'], chat.body['chatLog']['authorId'])  # authorId 기반 아이디마다 할당 고정
        # if chat.body['chatId'] == 18252186725340606:
        #     print("reply")
        #     if 'authorNickname' in chat.body.keys() and chat.body['authorNickname'] in '데드마우스':
        #         rand = random.randint(1, 5)
        #         if rand == 1:
        #             await chat.reply('데마는 바보래요~')
        #         elif rand == 2:
        #             attachment = {'mentions': [{'user_id': chat.body['chatLog']['authorId'], 'at': [1], 'len': 2}]}
        #             await chat.channel.sendChat("@태그", json.dumps(attachment), 1)

        if chat.body['chatId'] == 18252186725340606:
            print("미국주식방")
            if chat.body['authorNickname'] == "에이봇":
                print("에이봇")
                if chat.body['chatLog']['message'][0] == '?' or chat.body['chatLog']['message'][0] == '/':
                    await chat.reply("에이봇 바보")
            # if chat.body['chatLog']['message'][0:2] == '?f':
            #     ticker = chat.body['chatLog']['message'][3:]
            #     crawler = Crawler()
            #     crawler.forecast_as_png(ticker)
            #     crawler.driver.close()
            #     path = 'image/' + f'{ticker}_forecast.png'
            #     im = Image.open(path)
            #     w, h = im.size
            #     await chat.send_photo_by_path(path, w, h)
            #
            # if chat.body['chatLog']['message'][0:2] == '?c':
            #     ticker = chat.body['chatLog']['message'][3:]
            #     crawler = Crawler()
            #     crawler.chart_save_as_png(ticker)
            #     crawler.driver.close()
            #     path = 'image/' + f'{ticker}_chart.png'
            #     im = Image.open(path)
            #     w, h = im.size
            #     await chat.send_photo_by_path(path, w, h)

        # if chat.body['chatId'] == 18169150810640733:
        #     print("고급 수학방")
        #     await chat.hide()





            # if 'tl' in chat.body['chatLog']['message'] or '탈' in chat.body['chatLog']['message']:
            #     rand = random.randint(1, 5)
            #     if rand == 1:
            #         await chat.reply('배탈나임마')
            #     elif rand == 2:
            #         await chat.reply('나도 탈래~~')
            #     elif rand == 3:
            #         await chat.reply('탈탈 털려버렸어...')
            #     elif rand == 4:
            #         await chat.reply('탈출 완료 ~ ☆')
            #     elif rand == 5:
            #         await chat.reply('탈락입니다 ~ ♬')
        # if 'authorNickname' in chat.body.keys() and chat.body['authorNickname'] in '호옹이부엉이':
        #     print(chat.body['chatLog']['authorId'])
        #     print(chat.body['chatLog'])
        #     await chat.hide()

        # if chat.message == "TEST":
        #     await chat.reply("KAKAOPY is running")
        #
        # if chat.message == "태그":
        #     # 이와 같은 방식으로 메세지를 보내는 법은 깃헙 위키에 나와 있습니다
        #     attachment = {'mentions': [{'user_id': chat.author_id, 'at': [1], 'len': 2}]}
        #     await chat.channel.send_chat("@태그", json.dumps(attachment), 1)
        #
        # # 자신의 메시지의 경우
        # if chat.message == ".삭제":
        #     await chat.delete()
        #
        # # OpenChat 권한 있는 경우
        # if chat.message == ".가리기":
        #     await chat.hide()
