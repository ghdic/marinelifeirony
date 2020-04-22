package main

import (
	"fmt"

)

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