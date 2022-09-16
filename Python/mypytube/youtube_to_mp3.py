from pytube import YouTube

url = 'https://www.youtube.com/watch?v=YrcyW38bUVI'

yt = YouTube(url)

print('Downloading : ', yt.title)

yt.streams.filter(mime_type='audio/webm', abr='160kbps', audio_codec='opus')[0].download()