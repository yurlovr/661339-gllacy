"use strict"


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

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });
}
