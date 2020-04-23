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