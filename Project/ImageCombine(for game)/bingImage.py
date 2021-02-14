# pip install pillow
# 사진들의 범위 읽어들여서 붙이게 했심
from PIL import Image
import os

path = os.getcwd()
""" save file name """
savefilename = path + "\\images\\out_new.png"
""" load file name """
loadfilename = []
imagesfolder = os.listdir(path + "/images")
for i in range(len(imagesfolder)):
    imagesfolder[i] = path + "\\images\\" + imagesfolder[i]
    fname, ext = os.path.splitext(imagesfolder[i])
    if ext == '.png':
        loadfilename.append(imagesfolder[i])

print(loadfilename)

""" 컬럼 갯수 """
sizeColumn = 3
max_row = 0
max_col = 0
row_list = []

col = 0
row = 0
cnt = 0
for j in loadfilename:
    image = Image.open(j)
    width, height = image.size
    col += width
    row = max(row, height)
    cnt += 1
    if cnt == sizeColumn:
        max_col = max(max_col, col)
        max_row += row
        row_list.append(row)
        i = 0
        col = 0
        row = 0
        cnt = 0
if cnt != 0:
    max_col = max(max_col, col)
    max_row += row
    row_list.append(row)

newimg=Image.new("RGBA", (max_col, max_row))
i = 0
row = row_list[0]
cnt = 0
col = 0
for j in loadfilename:
    if cnt == sizeColumn:
        i += 1
        row += row_list[i]
        cnt = 0
        col = 0
    image = Image.open(j)
    width, height = image.size

    newimg.paste(image, (col , row))
    col += width
    cnt += 1

newimg.save(savefilename, "PNG")