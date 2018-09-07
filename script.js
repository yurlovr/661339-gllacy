"use strict"

function openFeedBack(event) {
  event.preventDefault();
  let feedBackForm = document.querySelector(".modal-form-feedback");
  let overlay = document.querySelector(".modal-overlay");
  feedBackForm.style.display = "block";
  overlay.style.display = "block";
}

function closeFeedBack(event) {
  let feedBackForm = document.querySelector(".modal-form-feedback");
  let overlay = document.querySelector(".modal-overlay");
  feedBackForm.style.display = "none";
  overlay.style.display = "none";
}

function closeFeedBackEsc(event) {
  let feedBackForm = document.querySelector(".modal-form-feedback");
  let overlay = document.querySelector(".modal-overlay");
  if (event.keyCode === 27) {
    event.preventDefault();
    if (feedBackForm.style.display === "block") {
      feedBackForm.style.display = "none";
      overlay.style.display = "none";
    }
  }
}

let buttonOpenSendForm = document.querySelector(".btn-feedback");
buttonOpenSendForm.addEventListener('click',openFeedBack);

let buttonCloseSendForm = document.querySelector(".modal-form-feedback-close");
buttonCloseSendForm.addEventListener('click',closeFeedBack);


window.addEventListener("keydown", closeFeedBackEsc);

