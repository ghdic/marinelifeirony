from PIL import Image

class ImageManager:
    def combine_image(self, files):
        """ 이미지들을 일자로 병합한다 """
        print("combine")

    def get_image_topside(self, filename, size):
        """ 사진의 윗부분을 size 만큼 가져온다 """
        im = Image.open(filename)
        width, height = im.size
        area = (0, 0, width, size)  # area = (가로시작점, 세로시작점, 가로끝, 세로끝)
        crop_image = im.crop(area)
        crop_image.save('fix_' + filename)

    def get_image_bottomside(self, filename, size):
        """ 사진의 아래부분을 size 만큼 가져온다 """
        im = Image.open(filename)
        width, height = im.size
        area = (0, height - size, width, height)
        crop_image = im.crop(area)
        crop_image.save('fix_' + filename)

    def crop_iamge_topside(self, filename, size):
        """ 사진의 윗부분을 size 만큼 자른다 """
        im = Image.open(filename)
        width, height = im.size
        area = (0, size, width, height)
        crop_image = im.crop(area)
        crop_image.save('fix_'+filename)

    def crop_image_bottomside(self, filename, size):
        """ 사진의 밑부분을 size 만큼 자른다 """
        im = Image.open(filename)
        width, height = im.size
        area = (0, 0, width, height - size)
        crop_image = im.crop(area)
        crop_image.save('fix_' + filename)

Manger = ImageManager()
Manger.get_image_topside('atos_profile.png', 140)
