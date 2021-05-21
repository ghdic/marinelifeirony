// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Section 1
const section1 = document.querySelector('#section1')
const video1 = section1.querySelector('#active_senior1')
const text1 = section1.querySelector('#text1')

// Scenes1
let scene1 = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: section1,
    triggerHook: 0
})
.addIndicators()
.setPin(section1)
.addTo(controller)

// Text Animation 1
const textAnim1 = TweenMax.fromTo(text1, 3, {opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: section1,
    triggerHook: 0
})
.setTween(textAnim1)
.addIndicators()
.addTo(controller)



// Video Animation
let accelamount = 0.1
let scrollpos = 0
let delay = 0

scene1.on('update', (e) => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount
    video1.currentTime = delay // 부드럽게 멈추게하기 위해서 scrollpos가 아닌 delay 사용
}, 33.3)



