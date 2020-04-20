# GO 공부하기

## 공부 자료
* [컴맹을 위한 Go 언어 기초 프로그래밍](https://www.youtube.com/watch?v=Tq3W8UyltFs&list=PLy-g2fnSzUTAaDcLW7hpq0e8Jlt7Zfgd6&index=1)
* [go 쿡북](https://codingnuri.com/golang-book/)
* [go tour](https://go-tour-kr.appspot.com/#1)
* [go doucument ko](https://github.com/golang-kr/golang-doc/wiki)
* [go documentation](https://golang.org/doc/)
* [awesome-go](https://github.com/avelino/awesome-go)
https://go-tour-kr.appspot.com/#25 여기까지 정리함
# 기본 개념

## 입출력

<https://golang.org/pkg/fmt>

### 출력
```
// 줄바꿈 기본으로 가능
fmt.Println("Hello world")
// 포맷 지정 순서대로 2, 10, 16 진수, 소수, char, string
fmt.Printf("%b %d %x %f %c %s\n", 10, 10, 10, 1.22321111111, 'A', "안녕하세요")
```

### 입력
```
var input int
fmt.Scan(&input) // 콘솔에서 공백, 새줄로 구분하여 입력 받음
fmt.Scanln(&input) // 콘솔에서 공백으로 구분하여 입력을 받음
fmt.Scanf("%d", &input) // 콘솔에서 형식을 지정하여 입력을 받음
fmt.Printf("입력받은 숫자는 %d\n", input)
```

### 포맷
|format|mean|
|:----:|:-----:|
|%b	|2진수|
|%c	|character, 하나의 유니코드 나타냄(아스키코드아님!!!)|
|%d	|10진수|
|%o	|8진수|
|%O	|8진수형태로 앞에 0붙여서 표시|
|%x	|16진수 소문자로 표현|
|%X	|16진수 대문자로 표현|
|%U	|유니코드 포맷으로 표현|
|%e	|과학적 수식표현 e.g. -1.234456e+78|
|%E	|과학적 수식표현 E가 대문자로, e.g. -1.234456E+78|
|%f	|소수점표기, 실수표현|
|%F	|%f와 일치|
|%g	|더 큰 정밀도를 가진 소수점표기, 실수표현|
|%G	|%g와 일치|
|%s	|string bytes 또는 slice(문자열)을 표현|
|%p	|16진수 기반의 포인터를 출력|

### default 포맷
`%v` 포맷은 default로 변수를 자료형에 따라 포맷을 결정한다.

|type|default|
|:----:|:-----:|
|bool:                    |%t|
|int, int8 etc.:          |%d|
|uint, uint8 etc.:        |%d|
|float32, complex64, etc: |%g|
|string:                 |%s|
|chan:                    |%p|
|pointer:                 |%p|

### 출력포맷 지정
```
fmt.Printf("%5d\n", 100)      // 오른쪽 정렬 후 5칸 중 빈칸은 공백
fmt.Printf("%05d\n", 100)     // 오른쪽 정렬 후 5칸 중 빈칸은 0
fmt.Printf("%.5f\n", 2.0/3)   // 소수점 5자리까지만 반올림 출력
fmt.Printf("%10.5f\n", 2.0/3) // 소수점 아래도 칸으로 카운트됨
```

## 변수 선언
```
var x, y, z int = 1, 2, 3 // 한번에 여러값 할당o, 같은 자료형인 경우 마지막에 자료형을 적어준다
var str string
str = "안녕" // 선언 이후 값 할당도 가능
var c, python, java = true, false, "no!" // 자료를 할당해서 명시해줄 경우 자료형을 따로 명시할필요 없음
c, python, java := true, false, "no!" // :=을 통해 var 생략 가능
const hi = "hello world" // 상수(수정 불가!)
hi[0] = 'k' // 수정시 에러
```

## 반복문 for

```
sum := 0
for i := 0; i < 10; i++ {
    sum += i
}
fmt.Println(sum)
```

## 조건문 if

```
var x int
fmt.Scanf("%d", x)
if x < 10 {
    fmt.Println("입력하신 값은 10보다 작습니다")
}else{
    fmt.Println("입력하신 값은 10보다 큽니다")
}
```

## 함수
```
func 함수명(변수명 자료형, ...) 반환자료형(또는 반환할 변수도 가능) {
	return x + y
}

```
```
func add(x int, y int) int {
	return x + y
}

// sum이라는 변수가 이미 선언된것
func add(x int, y int) (sum int) {
	sum = x + y
	return
}

// 여러개도 반환 가능, args 인자 자료형이 같은 경우 마지막에만 써줘도 o
func swap(x, y string) (string, string) {
    return y, x
}
```