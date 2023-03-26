"use strict";

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

var typing = new Typed(".text", {
  strings: [
    "",
    "UX/UI Designer",
    "Freelancer",
    "Graphics Designer",
    "Web Designer",
    "Web Developer",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll").fadeIn();
  } else {
    $("#scroll").fadeOut();
  }
});
$("#scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
emailjs.init("IVEJ7JcL0kH6ZNRJC");
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user's name, email address, and message from the form
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email_address"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Send the email using EmailJS
    emailjs
      .send("service_toftki2", "template_beao8ue", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          // console.log("FAILED...", error);
        }
      );
  });
setInterval(() => {
  console.clear();
}, 1000);
