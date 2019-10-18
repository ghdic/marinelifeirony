// 엘리베이터 문제 풀기
// https://play.elevatorsaga.com/

/*
goToFloor(가려는 층, 곧장갈건지vs들르며 갈건지)
가려는 층으로 엘리베이터를 보내는 함수
stop()
엘리베이터 멈춤
currentFloor()
현재층 === 로 비교
goingUpIndicator()
goingDownIndicator()
층이 멈출때 승객의 행동에 영향을 미치는걸 세팅하거나 받아옴
maxPassengerCount()
엘리베이터에 태울 수 있는 최대 승객수를 받음
loadFactor()
엘리베이터 하중 계수 0은 비어있다, 1은 가득찼다는 뜻 0~1
destinationDirection()
"up", "down", "stopped" 현재 상태 반환
destinationQueue = []
엘리베이터가 갈 예정인 목적지들
checkDesinationQueue()
큐가 수정될때 호출됨
getPressedFloors()
현재 눌러져있는 층들

// Event


*/

//level1
{
    
    
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var Max = 2, Min = 0;
        elevators[0].up = true;
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            if(elevator.up){
                for(var i = Max; i >= Min; --i)
                    elevator.goToFloor(i);
                elevator.up = false;
            }
            else{
                for(var i = Min; i <= Max; ++i)
                    elevator.goToFloor(i);
                elevator.up = true;
            }
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}