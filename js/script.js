"use strict"

function openFeedBack(event) {
  event.preventDefault();
  feedBackForm.style.display = "block";
  overlay.style.display = "block";
}

function closeFeedBack(event) {
  feedBackForm.style.display = "none";
  overlay.style.display = "none";
}

function closeFeedBackEsc(event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (feedBackForm.style.display === "block") {
      feedBackForm.style.display = "none";
      overlay.style.display = "none";
    }
  }
}

function getChangeSlide(event) {

  let sliderItems = document.querySelector('.slider-items');
  let currentSlide = sliderItems.querySelector('.current-slide-item');
  let currentTarget = document.querySelector('.current-slide');
  let target = event.target;


  if (target.classList.contains('current-slide')){
      return;
  } else {
    currentTarget.classList.remove('current-slide');
    target.classList.add('current-slide');
  }

  if (target.classList.contains('green')) {
    let showSlide = sliderItems.querySelector('.green');
    currentSlide.classList.add('visually-hidden');
    currentSlide.classList.remove('current-slide-item');
    showSlide.classList.add('current-slide-item');
    showSlide.classList.remove('visually-hidden');
    document.body.style.backgroundColor = "#849d8f";
  }

  if (target.classList.contains('grey')) {
    let showSlide = sliderItems.querySelector('.grey');
    currentSlide.classList.add('visually-hidden');
    currentSlide.classList.remove('current-slide-item');
    showSlide.classList.add('current-slide-item');
    showSlide.classList.remove('visually-hidden');
    document.body.style.backgroundColor = "#8996a6";
  }

  if (target.classList.contains('brown')) {
    let showSlide = sliderItems.querySelector('.brown');
    currentSlide.classList.add('visually-hidden');
    currentSlide.classList.remove('current-slide-item');
    showSlide.classList.add('current-slide-item');
    showSlide.classList.remove('visually-hidden');
    document.body.style.backgroundColor = "#9d8b84";
  }

}


const feedBackForm = document.querySelector('.modal-form-feedback');
const overlay = document.querySelector(".modal-overlay");

let buttonOpenSendForm = document.querySelector('.btn-feedback');
buttonOpenSendForm.addEventListener('click',openFeedBack);

let buttonCloseSendForm = document.querySelector('.modal-form-feedback-close');
buttonCloseSendForm.addEventListener('click',closeFeedBack);

window.addEventListener("keydown", closeFeedBackEsc);

let buttonSliderTarget = document.querySelector(".slider-btn-items");
buttonSliderTarget.addEventListener('click',getChangeSlide);



