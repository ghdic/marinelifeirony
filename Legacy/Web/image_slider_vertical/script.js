const sliderContainer = document.querySelector(".slider-container");
const slideTop = document.querySelector(".top-slide");
const slideBottom = document.querySelector(".bottom-slide");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const slidesLength = slideBottom.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideTop.style.left = `-${(slidesLength - 1) * 100}vw`;

leftButton.addEventListener("click", () => changeSlide("left"));
rightButton.addEventListener("click", () => changeSlide("right"));

window.addEventListener('wheel', function(event) {
  if(event.deltaY < 0){
    changeSlide('left');
  } else if(event.deltaY > 0 ){
    changeSlide('right');
  }
});

const changeSlide = (direction) => {
  if (direction === "right") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "left") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  console.log(activeSlideIndex*100);
  slideBottom.style.transform = `translateX(-${
    activeSlideIndex * 100
  }vw)`;
  slideTop.style.transform = `translateX(${
    activeSlideIndex * 100
  }vw)`;
};
