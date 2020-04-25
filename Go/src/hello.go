package main

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