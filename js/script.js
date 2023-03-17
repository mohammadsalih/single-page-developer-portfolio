"use strict";

// variables
const heroImg = document.querySelector(".hero-img");
const formSubmit = document.querySelector(".form-submit");
const projectsImgs = [...document.querySelectorAll(".project-img")];

// functions
// chainging the hero image based on the screen size
const changeHeroImg = function () {
  const windowInnerWidth = window.innerWidth;
  let devise = "";

  if (windowInnerWidth > 1068) {
    devise = "desktop";
  } else if (windowInnerWidth > 820) {
    devise = "tablet";
  } else {
    devise = "mobile";
  }

  heroImg.src = `assets/images/image-profile-${devise}.webp`;
};

// chainging the projects images based on the screen size
const changeprojectsImgs = function () {
  const windowInnerWidth = window.innerWidth;
  let size = "";

  windowInnerWidth > 1068 ? (size = "large") : (size = "small");

  projectsImgs.forEach(
    (img, i) =>
      (img.src = `assets/images/thumbnail-project-${
        i + 1
      }-${size}.webp`)
  );
};

// form validation
function validateForm(event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameInput.nextElementSibling.textContent =
      "Please enter your name !";
    isValid = false;
    nameInput.parentElement.classList.add("input-error");
  } else {
    nameInput.nextElementSibling.innerHTML = "&nbsp;";
    nameInput.parentElement.classList.remove("input-error");
  }

  if (emailInput.value.trim() === "") {
    emailInput.nextElementSibling.textContent =
      "Please enter your email !";
    isValid = false;
    emailInput.parentElement.classList.add("input-error");
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.nextElementSibling.textContent =
      "Please enter a valid email !";
    isValid = false;
    emailInput.parentElement.classList.add("input-error");
  } else {
    emailInput.nextElementSibling.innerHTML = "&nbsp;";
    emailInput.parentElement.classList.remove("input-error");
  }

  if (messageInput.value.trim() === "") {
    messageInput.nextElementSibling.textContent =
      "Please enter a message !";
    isValid = false;
    messageInput.parentElement.classList.add("input-error");
  } else {
    messageInput.nextElementSibling.innerHTML = "&nbsp;";
    messageInput.parentElement.classList.remove("input-error");
  }

  event.preventDefault();

  return isValid;
}

function isValidEmail(email) {
  // Adapted from https://stackoverflow.com/a/46181
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// function call backes
changeHeroImg();
changeprojectsImgs();

// event listeners
window.addEventListener("resize", changeHeroImg);
window.addEventListener("resize", changeprojectsImgs);
formSubmit.addEventListener("click", validateForm);
