# 이 파일은 cx_Freeze를 이용해 pygame로 만든 게임을 exe형태로 바꿔주는것
# python 3.7
# pip install --upgrade git+https://github.com/anthony-tuininga/cx_Freeze.git@master
# python setup.py build

import cx_Freeze
import os

executables = [cx_Freeze.Executable(
    script="main.py",
    icon='maple.ico'
)]

include_files = []
# for (path, dir, files) in os.walk("element\\"):
#     for filename in files:
#         include_files.append(path + '\\' +filename)
cx_Freeze.setup(
    name="Maple Story",
    version='0.1',
    description='Myple Story',
    author='ghdic',
    options={"build_exe" : {"packages":["pygame"],
                              "include_files":include_files}},
    executables=executables
)