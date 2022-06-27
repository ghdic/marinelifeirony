
# # jpg to pdf with img2pdf
# import os
# from img2pdf import convert
#
#
# realpath = r"D:/github/marinelifeirony/Python/Pillow/images"
# absolutepath = r"images"
#
# with open("out.pdf", "wb") as f:
# 	image_list = []
#
# 	for file in os.listdir(realpath):
# 		if file.endswith(".jpg"):
# 			image_list.append(realpath + '/' + file)
# 	print(image_list)
# 	pdf = convert(image_list)
# 	f.write(pdf)


# # jpg to pdf with pillow
# import os
# from PIL import Image
#
#
# realpath = r"D:/github/marinelifeirony/Python/Pillow/images"
# absolutepath = r"images"
#
# images = [
# 	Image.open(realpath + '/' + f)
# 	for f in os.listdir(realpath)
# ]
#
# images[0].save(
# 	"out.pdf", "PDF", resolution=100.0, save_all=True, append_images=images[1:]
# )