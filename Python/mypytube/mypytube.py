# # 유튜브 영상정보 가져오기
# from pytube import YouTube
#
# url = 'https://youtu.be/TtDeUBKpa6c'
#
# yt = YouTube(url)
#
# print("제목 : ", yt.title)
# print("길이 : ", yt.length)
# print("게시자 : ", yt.author)
# print("게시날짜 : ", yt.publish_date)
# print("조회수 : ", yt.views)
# print("키워드 : ", yt.keywords)
# print("설명 : ", yt.description)
# print("썸네일 : ", yt.thumbnail_url)

# # 유튜브 플레이리스트 다운로드
# from pytube import Playlist
#
# playlist = 'https://www.youtube.com/playlist?list=PLbSYejIKUpAPfQtO5-xwDilxUenp3SRcd'
# DOWNLOAD_DIR = r"D:\github\marinelifeirony\Python\mypytube"
#
# p = Playlist(playlist)
#
# for video in p.videos:
#     video.streams.first().download(DOWNLOAD_DIR)


# 다운로드 진행사항 콜백
# from pytube import YouTube
#
# DOWNLOAD_DIR = r"D:\github\marinelifeirony\Python\mypytube"
#
# url = 'https://youtu.be/lNDtn4wlaH0'
#
#
# def on_complete(stream, file_path):
#     print(stream)
#     print(file_path)
#
#
# def on_progress(stream, chunk, bytes_remaining):
#     print(100 - (bytes_remaining / stream.filesize * 100))
#
#
# yt = YouTube(url, on_complete_callback=on_complete, on_progress_callback=on_progress)
# yt.streams.first().download()
# # yt.register_on_complete_callback()

# # 다운로드 퀼리티
# from pytube import YouTube
# DOWNLOAD_DIR = r"D:\github\marinelifeirony\Python\mypytube"
#
# url = 'https://youtu.be/TtDeUBKpa6c'
#
# yt = YouTube(url)
#
# for stream in yt.streams:
#     print(stream)
#
# # yt.streams.get_highest_resolution().download(DOWNLOAD_DIR)
# # yt.streams.get_lowest_resolution().download(DOWNLOAD_DIR)
# # yt.streams.get_audio_only().download(DOWNLOAD_DIR)
#
# video_filter = yt.streams.filter(mime_type="video/mp4", res="720p", progressive=True)
#
# for stream in video_filter:
#     print(stream)


# # 유튜브 영상 자막 다운받기
# from pytube import YouTube
# import re
# DOWNLOAD_DIR = r"D:\github\marinelifeirony\Python\mypytube"
#
# url = 'https://www.youtube.com/watch?v=aircAruvnKk'
# yt = YouTube(url)
# yt.streams.get_highest_resolution().download(DOWNLOAD_DIR)
#
# captions = yt.captions
#
# for caption in captions:
#     print(caption)  # 가져올 수 있는 언어 확인
#
# caption = captions.get_by_language_code('ko')
# print(caption)
#
# print(caption.xml_captions)  # xml형태로 가져옴
#
# srt_caption = caption.xml_caption_to_srt(caption.xml_captions)  # xml -> srt
# print(srt_caption)
#
# # 해당 영상 제목에 | 특수 문자가 있다. 파일에는 특정 특수문자가 쓰여질수 없으므로 제거해줌
# title = re.sub('[\/:*?"<>|]','', yt.title)
#
# with open(DOWNLOAD_DIR + '\\' + title + '.srt', 'wt') as f:
#     f.write(srt_caption)  # 파일로 저장

