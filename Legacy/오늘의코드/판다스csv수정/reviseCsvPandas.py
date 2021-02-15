import os
import pandas as pd

path = "files\\"
filenames = []
# os.listdir(path) 특정 폴더만 하는 경우
for root, dirs, files in os.walk(path): # 해당 폴더 아래 있는 모든 파일 탐색
    for file in files:
        if file.endswith((".csv", ".xlsx")): # 찾는 확장자
            filenames.append(os.path.join(root, file))


for file in filenames:
    if file.split(".")[-1] == "xlsx":
        df = pd.read_excel(file, sheet_name="Sheet1") # pip install xlrd
    else:
        df = pd.read_csv(file)
    for i in df.index:
        df.at[i, 'number'] += 1
    print(file)
    print(df.head())

    # save file from dataframe
    if file.split(".")[-1] == "xlsx":
        df.to_excel(file, sheet_name="Sheet1", index=False)
    else:
        df.to_csv(file, index=False)