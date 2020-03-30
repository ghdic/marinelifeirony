

from urllib import request
url = "http://avangs.info/?module=file&act=procFileDownload&file_srl=1692437&sid=0142e7375d8d8f2d7b9d3dfdd3c042e7&module_srl=237788"

request.urlretrieve(url, "hi.png")