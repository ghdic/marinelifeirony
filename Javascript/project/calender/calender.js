// 중요한 부분!! 절대 지우지 말것
var input = prompt("\"킹갓 엠페럴 인생마린님의 소스를 보여주세요\" 라고 입력해주세요");
while(input != "킹갓 엠페럴 인생마린님의 소스를 보여주세요"){
    input = prompt("\"킹갓 엠페럴 인생마린님의 소스를 보여주세요\" 라고 입력해주세요");
}

// 현재 날짜 받아옴
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

// 해당 날짜의 첫째 요일을 받아옴
var fDate = new Date(year, month, 1);
var fDay = fDate.getDay();

// 매월 마지막 날짜
var last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var lDay = last[month];
if(month + 1 == 2){
    if(year % 4 && year % 100 != 0 || year % 400 == 0) // 윤년 처리
    lDay = 29;
}



var row = Math.ceil((fDay + lDay) / 7); // 행수를 구함 (ceil 올림함수)

document.write(`<h1>${year}.${month + 1}.${day}</h1>`);

// 달력 테이블 생성
var calender = "<table border='1'>";
calender+="<tr>";
var week = ["일", "월", "화", "수", "목", "금", "토"];
for(var i = 0; i < 7; ++i)
    calender+= `<th>${week[i]}</th>`; // 열 요소 집어 넣기
calender += "</tr>";

var dNum = 1;

for(var i = 1; i <= row; ++i){
    calender += "<tr>";
    for(var j = 1; j <= 7; ++j){
        if(i == 1 && j <= fDay || dNum > lDay){
            calender += "<td></td>"; // 비어있는칸 생성
        }
        else{
            if(day == dNum)
                calender += `<td bgcolor="#ff9999">${dNum}</td>`;
            else
                calender += `<td>${dNum}</td>`; // 해당 요일 넣어줌
            ++dNum;
        }
    }
    calender += "</tr>";
}

document.write(calender);