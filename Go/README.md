# GO 공부하기

## 공부 자료
* [컴맹을 위한 Go 언어 기초 프로그래밍](https://www.youtube.com/watch?v=Tq3W8UyltFs&list=PLy-g2fnSzUTAaDcLW7hpq0e8Jlt7Zfgd6&index=1)
* [go 쿡북](https://codingnuri.com/golang-book/)
* [go tour](https://go-tour-kr.appspot.com/#1)
* [go doucument ko](https://github.com/golang-kr/golang-doc/wiki)
* [go documentation](https://golang.org/doc/)
* [awesome-go](https://github.com/avelino/awesome-go)
* [예제로 배우는 go프로그래밍](http://golang.site/)

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

함수도 변수처럼 쓰일수 있다

```
func main(){
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(3, 4))
}
```

함수 클로저로 만들어보는 피보나치

```
// 클로저 함수 기본형
funct 함수이름() func(자료형) 반환형 {
	변수
	return func(자료형) 반환형{
		return 반환형
	}
}
```

// 함수형 변수로 사용시 static처럼 기억
```
func ff() func() int{
	x := 0 // 함수형변수로 할당될 경우 static 변수처럼 기억됨
	return func() int {
		x = x + 1
		return x
	}
}

func main(){
	fc := ff()
	for i:=0; i < 10; i++{
		fmt.Println(fc())
	}
}
```

```
// 함수 클로져로 만드는 피보나치
func fibonacci() func() int {
	a1, a2, a3 := 1, 1, 2
	return func() int{
		a3 = a1 + a2
		a1 = a2
		a2 = a3
		return a1
	}
}

func main(){
	f := fibonacci()
	for i:=0; i<10; i++{
		fibonacci()
		fmt.Println(f())
	}
}
```

## 구조체
c 구조체와 같음
```
type Vertex struct{
	x, y int
}

func main() {
	v := Vertex{1, 2}
	w := Vertex{x:20} // y는 default값인 0이 들어감
	v.x = 10
	fmt.Println(v)
	fmt.Println(w)
}
```

## 메소드
func과 메소드명 사이에 receiver명을 포인터로 넣어주면 메소드를 선언할 수 있다

```
package main

import(
	"fmt"
	"math"
)

type Vertex struct {
    X, Y float64
}

func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func (v *Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

// 메소드
// func(receiver Type) MethodName(parameterList) (returnTypes){}
func (a *Vertex) aaa(b int) float64{
	return a.X + float64(b)
}

func main(){
	v := &Vertex{3, 4}
	v.Scale(5)
	fmt.Println(v, v.Abs())
}
```

## 포인터
```
type Vertex struct{
	x, y int
}

func main() {
	
	p := Vertex{1, 2}
	q := &p // type *Vertex
	q.x = 10
	fmt.Println(p)
}
```

## 생성자 new
```
type Vertex struct{
	x, y int
}

func main() {
	v := new(Vertex) // 모든 필드가 0이 할당된 포인터를 반환
	// 이것과 같음var v *Vertex = new(Vertex)
	v.x = 10
	fmt.Println(v)
}
```

## 슬라이스
배열의 값을 가르키는 포인터와 배열의 길이를 정보로 갖고 있는 것

```
func main() {
    p := []int{2, 3, 5, 7, 11, 13}
    fmt.Println("p ==", p)

    for i := 0; i < len(p); i++ {
        fmt.Printf("p[%d] == %d\n",
            i, p[i])
	}
	
	// 슬라이싱 p[lo:hi]
	fmt.Println("p[1:4] ==", p[1:4])
    fmt.Println("p[:3] ==", p[:3])
	fmt.Println("p[4:] ==", p[4:])
	
	// make(type, len, capacity) T타입의 초기화 된 값을 반환하고, 메모리를 할당한다
	// new의 경우 T* 포인터를 반환함
	a := make([]int, 5)
    printSlice("a", a)
	b := make([]int, 0, 5)
	// b[0] = 10 // capacity되어 있다고 len보다 작으면 접근 불가
    printSlice("b", b)
    c := b[:2]
    printSlice("c", c)
    d := c[2:5]
	printSlice("d", d)

	b = append(b, 10) // append함수로 추가 가능
	printSlice("b", b)
	printSlice("c", c) // 슬라이싱으로 할당된 배열은 얕은복사이므로 b원소 수정시 수정됨
	for i := 0; i < 5; i++ {
		b = append(b, 20)
	}
	printSlice("b", b) // capacity 넘어가면 두배로 늘려서 재할당, c++ vector와 유사
	
	// 빈 슬라이스의 경우 nil 이다
	var e []int
	printSlice("e", e)
	if e == nil {
		fmt.Println("nil!")
	}

	// range로 슬라이스나 맵 순회가능
	var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
	for i, v := range pow{
		fmt.Printf("2**%d=%d\n", i, v)
	}

}

func printSlice(s string, x []int) {
    fmt.Printf("%s len=%d cap=%d %v\n",
        s, len(x), cap(x), x)
}
```


## 맵

```
type Vertex struct{
	y, x int64
}

func main(){
	//var m map[string]Vertex = make(map[string]Vertex)
	var m = map[string]Vertex{"init":Vertex{0,0}, "target":{5, 5}}
	m["go"] = Vertex{1, 1}
	//m["temp"] = {2, 2} // 요건 에러남;; 초기화때는 되는디
	fmt.Println(m)
	// 요소 값 가져오기
	element := m["go"] // 복사됨
	fmt.Println(element)
	delete(m, "go") // 해당 키 삭제
	fmt.Println(m)
	fmt.Println(m["go"]) // 해당 키가 없는 경우 default 반환
	elem, no := m["go"]
	elem, ok := m["target"] // 두번째인자 no, ok는 해당 키가 존재하는지 bool로 알려줌
	fmt.Println(elem, no, ok)
}
```
## 스위치
```
import (
	"fmt"
	"time"
)

func main(){
	fmt.Println("When's Saturday?")
	today := time.Now().Weekday()
	fmt.Println(today)
	switch time.Saturday {
	case today + 0: // break 안해줘도 되네!
		fmt.Println("Today")
	case today + 1:
		fmt.Println("Tomorrow")
	case today + 2:
		fmt.Println("In two days")
	default:
		fmt.Println("Too far away")
	}

	t := time.Now()
	switch{ // 조건 생략이 switch true와 동일
	case t.Hour() < 12: // if-then-else처럼 작성 가능
		fmt.Println("Good moring!")
	case t.Hour() > 17:
		fmt.Println("Good afternoon")
	default:
		fmt.Println("Good evening")
	}
}
```
## 인터페이스

```
package main

import(
	"fmt"
	"os"
)

type Reader interface{
	Read(b []byte) (n int, err error)
}

type Writer interface{
	Write(b []byte) (n int, err error)
}

type ReadWriter interface{
	Reader
	Writer
}

func main(){
	var w Writer
	// os.Stdout에서 이미 Writer가 있음
	w = os.Stdout
	fmt.Fprintln(w, "hello writer!")
}
```

## 에러
에러가 났을때 에러메세지를 정할수 있다
```
import(
	"fmt"
	"time"
)

type MyError struct{
	When time.Time
	What string
}

func (e *MyError) Error() string{ // 에러 전달 문자열
	return fmt.Sprintf("at %v, %s", e.When, e.What)
}

func run() error{ // 내장 인터페이스 타입 error
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}

func main(){
	if err := run(); err != nil{
		fmt.Println(err)
	}
}
```

```
import (
	"fmt"
	"math"
)

type ErrNegativeSqrt float64


func (e ErrNegativeSqrt) Error() string{
    return fmt.Sprintf("cannot Sqrt negative number: %f", e)
}

func Sqrt(f float64) (float64, error) {
	if x < 0 {
		return 0, ErrNegativeSqrt(f)
	}
	return math.Sqrt(f), nil
}

func main() {
    fmt.Println(Sqrt(2))
    fmt.Println(Sqrt(-2))
}
```

## 웹서버
모듈을 통해 간단하게 http 요청 및 응답을 수행할수 있다
```
package main

import(
	"fmt"
	"net/http"
)

type Struct struct{
    Greeting string
    Punct string
	Who string
}

type String string

func (s String) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, s)
}
	
func (s *Struct) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, s.Greeting, s.Punct, s.Who)
}


func main(){
	http.Handle("/string", String("I'm a frayed knot."))
    http.Handle("/struct", &Struct{"Hello", ":", "Gophers!"})
	http.ListenAndServe("localhost:4000", nil)
}

```

## 이미지
```
package main

import (
    "fmt"
	"image"
	"image/color"
	"golang.org/x/tour/pic" // go get golang.org/x/tour/pic
)

type Image struct{
	w int
	h int
}

func (img *Image) ColorModel() color.Model{
	return color.RGBAModel
}

func (img *Image) Bounds() image.Rectangle{
	return image.Rect(0, 0, img.w, img.h)
}

func (img *Image) At(x, y int) color.Color{
	return color.RGBA{uint8(x), uint8(y), 255, 255}
}

func main() {
    m := &Image{256, 256}
    fmt.Println(m.Bounds())
	fmt.Println(m.At(0, 0).RGBA())
	pic.ShowImage(m)
}

```

## 고루틴
고루틴은 go 런타임에서 관리되는 경량 쓰레드이다 [고루틴 관련글](https://stonzeteam.github.io/How-Goroutines-Work/)

동일 주소 공간에서 실행되므로, 공유되는 자원이 반드시 동기화 되어야 한다.

```
import(
	"fmt"
	"time"
)

func say(s string){
	for i := 0; i < 5; i++{
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main(){
	go say("world")
	say("hello")
}
```

## 채널
쓰레드 동기화 문제를 해결하기 위해 채널을 이용한다
```
import(
	"fmt"
)

func sum(a []int, c chan int){
	sum := 0
	for _, v := range a{
		sum += v
	}
	c <- sum // sum을 c로 보냄
}

func main(){
	a := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(a[:len(a)/2], c)
	go sum(a[len(a)/2:], c)
	x, y := <-c, <-c // 채널을 통해 수신받을때까지 락됨
	fmt.Println(x, y, x+y)

	c = make(chan int, 2) // 버퍼 용량이 있는 경우 버퍼가 다 찰때까지 블록
	c <- 1
	c <- 2
	fmt.Println(<-c)
	fmt.Println(<-c)
}
```

```
import(
	"fmt"
)

func fibonacci(n int, c chan int){
	x, y := 0, 1
	for i:= 0; i < n; i++{
		c <- x
		x, y = y, x+y
	}
	close(c) // 채널은 송신측만 닫을 수 있음, 채널은 파일과 다르게 항상 닫을필요 x 더 이상 보낼 값이 없을 경우에만
}

func main(){
	c := make(chan int, 10)
	go fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i)
	}
}
```

## 셀렉트
```
import(
	"fmt"
)

func fibonacci(c, quit chan int){
	x, y := 0, 1
	for {
		select { // select ~ case 구문으로 통신 동작 중 하나가 수행 될 수 있을때까지 블록
		case c <- x:
			x, y = y, x+y
		case <- quit:
			fmt.Println("quit")
			return
		}
	}
}

func main(){
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```

```
import(
	"fmt"
	"time"
)

func main(){
	tick := time.Tick(1e8)
	boom := time.After(5e8)
	for {
		select {
		case <- tick:
			fmt.Println("tick")
		case <- boom:
			fmt.Println("BOOM!")
			return
		default: // 수행준비된 케이스가 없는 경우, 블로킹 없이 송수신할때 사용(더미데이터 주는..?)
			fmt.Println("     .")
			time.Sleep(5e7)
		}
	}
}
```