# Javascript
자바스크립트란 JIT컴파일 프로그래밍 언어로, 웹페이지 스크립트 언어로 주로 쓰이며, 나아가 Node.js 등 비브라우저 환경에서도 사용되며 사용성이 확장되어지고 있다. html은 어떠한 요소들을 선언하는 역할을 하고, css는 선언된 요소들을 꾸며주고, 위치를 정해주며, 반응하게 해주는 역할을 한다. 그럼 javascript는 무슨 역할을 할까? 바로 어떠한 행위를 수행하고 싶을때 그 행위를 정의하는 역할을 한다.

예를 들면 버튼을 클릭하면 알림창이 뜨게 한다거나, 결제가 완료되면 그 결과를 서버로 통신하여 전송한다거나 등 여러가지 행위를 정의해줄 수 있다.

## 공부자료
[MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals 데이터 구조 및 형 볼차례
[모던 자바스크립트](https://ko.javascript.info/)

## 변수
* var : 변수를 선언, 추가로 동시에 값을 초기화
* let : 블록 범위(scope) 지역 변수를 선언, 추가로 동시에 값을 초기화
* const : 블록 범위 읽기 전용 상수를 선언

### var와 let의 차이
둘은 block, 즉 스코프의 차이가 있다

```
if(true){
    var x = 5;
}
console.log(x); // 5
```

```
if(true){
    let x = 5;
}
console.log(x); = ReferenceError : x is not defined
```

### 초기화
* 초기화 하지 않는 경우 undefined로 처리됨
* 수치 문맥에서는 Nan으로 평가됨, var a; a + 2//Nan
* null은 수치 문맥에서 0으로 평가됨(false), var n = null; n*32 // 0

### 전역변수
웹페이지의 global한 객체인 `window`를 이용해 `windows.variable` 구문으로 전역변수를 설정하고 접근한다

### 변수 호이스팅
```
var myvar = "my value"; // 전역 선언

(function() {
  console.log(myvar); // undefined
  var myvar = "local value"; // 요놈 때문에 호이스팅!
})();
```

## 주석
```
// 한줄 주석

/*
여러줄 주석
*/
```

## 함수

### 함수 호이스팅
```
/* 함수 선언 */

foo(); // "bar"

function foo() {
  console.log('bar');
}

/* 함수 표현식 */

baz(); // TypeError: baz is not a function

var baz = function() { // 함수 표현식은 x
  console.log('bar2');
};
```