import openpyxl

wb = openpyxl.workbook() # 새 엑셀 생성
ws = wb.active # 현재 활성화된 창 받아옴(default 첫번째)
sheetNames = wb.sheetname # 시트이름을 리스트 형태로 받아옴
ws = wb['temp'] # 시트이름으로도 접근 가능