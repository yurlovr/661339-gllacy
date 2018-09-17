"use strict"

ymaps.ready(init);

let  myMap;
let myPlacemark;

function init(){
     myMap = new ymaps.Map("map", {
    center: [59.939306680954175,30.329245038406405],
    zoom: 15.5,
       controls:[],
  });

     myMap.behaviors.disable([
       'drag',
       'scrollZoom'
       ]);

     myPlacemark = new ymaps.Placemark([59.93860683861324,30.32302231349187], {
       balloonContentHeader: 'Магазин Мороженого "Глейси"',
       balloonContentBody: 'Самое Вкусное Мороженое!!!',
       balloonContentFooter: 'т. 8-812-450-25-25',
       hintContent: 'Магазин "Глейси"'
  }, {
       iconLayout: 'default#image',
       iconImageHref: 'img/pin-shadow.png',
       iconImageSize: [218, 142],
       iconImageOffset: [-40, -140]
     });

  myMap.geoObjects.add(myPlacemark);
}


function openFeedBack(event) {
  let userName = document.querySelector('.modal-name-user');
  event.preventDefault();
  feedBackForm.style.display = "block";
  feedBackForm.classList.add('show-anime');
  overlay.style.display = "block";
  userName.focus();
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
      feedBackForm.classList.remove('error-anime');
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

function getFormTest(event) {
  let userMessage = document.querySelector('.text-area');
  if (userMessage.value === "") {
    event.preventDefault();
    // feedBackForm.classList.remove("modal-error");
    // feedBackForm.offsetWidth = feedBackForm.offsetWidth;
    feedBackForm.classList.add('error-anime');
    setTimeout(function () {
      alert('Ведите текст сообщения!!!');
      feedBackForm.classList.remove('error-anime');
    },1600);
  }

}

const form = document.querySelector('.modal-form');
const feedBackForm = document.querySelector('.modal-form-feedback');
const overlay = document.querySelector(".modal-overlay");

let buttonOpenSendForm = document.querySelector('.btn-feedback');
buttonOpenSendForm.addEventListener('click',openFeedBack);

let buttonCloseSendForm = document.querySelector('.modal-form-feedback-close');
buttonCloseSendForm.addEventListener('click',closeFeedBack);

window.addEventListener("keydown", closeFeedBackEsc);

let buttonSliderTarget = document.querySelector(".slider-btn-items");
buttonSliderTarget.addEventListener('click',getChangeSlide);

let list  = document.querySelector('.catalog-navigation-items');
list.onmousedown = function (event) {
  let target = event.target;
  if (target.classList.contains('catalog-link')) {
      target.parentElement.style.backgroundColor = "#f6b5a5";
  }
};

list.onmouseup = function (event) {
  let target = event.target;
  if (target.classList.contains('catalog-link')) {
      target.parentElement.style.backgroundColor = "";
  }
};

list.onclick = function (event) {
  let target = event.target;
  if (target.classList.contains('catalog-navigation-item')) {
    if (target.firstElementChild.classList.contains('catalog-link')) {
      let href = target.firstElementChild.getAttribute('href');
      window.location.assign(href);
    }
  }
};


form.addEventListener('submit', getFormTest);
