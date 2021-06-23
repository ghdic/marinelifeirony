function setValueSomeRange() {
    Logger.log('OMG'); // 로그를 찍는다. View - log 에서 확인 가능

    var app = SpreadsheetApp;

    var ss = app.getActiveSpreadsheet();
    var activeSheet = ss.getActiveSheet();

    activeSheet.getRange('A1:D4').setValue(99); // (row, colum), (start_row, start_column, cnt_row, cnt_column) 1부터 시작(0부터 x) | ("A1"), ("A1:D4")
}

// 특정 값의 셀에 값 더하기
function addValue() {
    var app = SpreadsheetApp;

    var ss = app.getActiveSpreadsheet();
    var activeSheet = ss.getActiveSheet();

    var value = activeSheet.getRange(1, 1).getValue();

    activeSheet.getRange(1, 1).setValue(value + 5);
}

function ifelse() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var workingCell = activeSheet.getRange(7, 1).getValue();

    if (workingCell == '') {
        activeSheet.getRange(7, 2).setValue('No Value Exist'); // 값이 빈경우 ""
    } else if (workingCell > 50) {
        activeSheet.getRange(7, 2).setValue('High');
    } else if (workingCell <= 50) {
        activeSheet.getRange(7, 2).setValue('Low');
    }
}

function learnLoop() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // 시트이름으로 시트가져오기

    for (let i = 1; i < 7; i++) {
        activeSheet.getRange(i, 1).setValue('for loop');
    }
}

function clearContent() {
    var app = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    app.getRange('A1:F10').clear(); // 전체 클리어
    //app.getRange("A1:F10").clearContent(); // 내용만
    //app.getRange("A1:F10").clearFormat(); // 포맷만
}

/**
 * Multiplies the given number by 5
 *
 * @param x A number that whill be multiplied
 * @customfunction
 */
function MULTIPLYBY5(x) {
    // Custom 함수 만들기
    var result = x * 5;
    return result;
}

function setRangeValues() {
    var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var temp = activeSheet.getRange('A1:B7').getValues();

    activeSheet.getRange('C1:D7').setValues(temp);
}

//https://www.youtube.com/watch?v=cCBtsQGtzoQ&list=PLv9Pf9aNgemv62NNC5bXLR0CzeaIj5bcw&index=9   part 0 들으면댐
