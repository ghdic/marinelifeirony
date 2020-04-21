package main

import (
	"fmt"
	//"math"
)

type Vertex struct{
	y, x int64
}

func main(){
	//var m map[string]Vertex = make(map[string]Vertex)
	var m = map[string]Vertex{"init":Vertex{0,0}, "target":{5, 5}}
	m["go"] = Vertex{1, 1}
	//m["temp"] = {2, 2} // 요건 에러남;; 초기화때는 되는디
	fmt.Println(m)
}