// Formspree code
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);

// FORM BORDERS 
$("#contact-form input,#contact-form textarea").on("input focusin",(e)=>{
  $(e.target).parent().addClass("focusIn");
  if ($(e.target).val().trim().length > 0) {
    $(e.target).parent().addClass("valid");
    $(e.target).parent().removeClass("invalid");
  } else {
    $(e.target).parent().addClass("invalid");
    $(e.target).parent().removeClass("valid");
  }
});

$("#contact-form input,#contact-form textarea").on("focusout",(e)=>{
    $(e.target).parent().removeClass("focusIn");
});

// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });
});

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
// workheader.style.color = "var(--first-color)";
// educationheader.style.color = "var(--text-color)";
workheader.style.color = "var(--text-color)";
educationheader.style.color = "var(--first-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
  }
});

// PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpfunc);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// obtain the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark icon/theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

window.onload = function() {
  let temp = window.location.href;
  if(!(temp.includes("akshay2002singh"))){
    document.querySelector("body").innerHTML = `<h1 style="height: 250px; width: 250px; margin: 50px auto">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.04 122.88" style="enable-background:new 0 0 85.04 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M42.89,88.34c3.66-2.03,10.09-5.03,19.25-8.95c0.46-0.23,1.65-0.75,3.55-1.54c3.28-3.34,5.96-5.84,8.13-7.52 c2.14-1.66,3.69-2.5,4.64-2.5c1.18,0,2.04,0.38,2.62,1.11c0.55,0.73,0.84,1.86,0.84,3.4c0,1.31-0.2,3.14-0.6,5.52 c2.42,3.08,3.63,5.35,3.63,6.83c0,1.25-0.35,2.21-1.01,2.85c-0.69,0.66-1.7,0.98-3.05,0.98c-0.66,0-1.7-0.35-3.06-1.07 c-1.38-0.7-3.14-1.74-5.28-3.11c-5.19,0.96-12.62,3.89-22.31,8.78c1.24,0.73,2.13,1.27,2.71,1.63c3.37,1.92,7.55,4.5,12.51,7.73 c0.6,0.41,2.02,1.25,4.21,2.56c10.24,1.19,15.37,3.8,15.37,7.81c0,2.61-2.77,4.39-8.27,5.29c-2.59,3.16-4.73,4.76-6.43,4.76 c-2.02,0-3.98-2.67-5.91-7.99c-0.17-0.58-0.46-1.39-0.92-2.47c-7.9-6.54-14.99-11.47-21.3-14.81c-7.7,4.39-14.85,9.59-21.45,15.66 c-0.89,6.42-2.8,9.62-5.74,9.62c-1.84,0-3.98-1.8-6.4-5.43c-5.74,0-8.62-1.6-8.62-4.76c0-2.32,1.07-4.01,3.2-5.09 c2.13-1.04,6.66-2.06,13.52-3.1c5.1-3.78,11.18-7.58,18.22-11.39c-9.46-4.76-17.15-7.7-23.12-8.78c-1.41,1.25-2.71,2.18-3.89,2.82 c-1.18,0.61-2.28,0.93-3.28,0.93c-1.47,0-2.57-0.32-3.32-0.93c-0.78-0.64-1.15-1.54-1.15-2.73c0-1.07,1.24-3.28,3.72-6.57 c-0.58-2.32-0.87-4.06-0.87-5.26c0-1.71,0.35-2.96,1.01-3.81C4.73,67.98,5.7,67.57,7,67.57c1.29,0,2.97,0.84,5.04,2.56 c2.11,1.69,4.61,4.27,7.52,7.73C26.06,80.18,33.81,83.69,42.89,88.34L42.89,88.34L42.89,88.34z M52.96,60.6l-1.7,4.35 c-2.13,0.73-5.05,1.11-8.71,1.11c-1.78,0-3.43-0.09-4.9-0.29c-1.47-0.2-2.74-0.47-3.8-0.81l-1.7-4.35L20.36,54.9l-1.09-7.15 c-0.17-1.36-1.39-4.03-3.64-8.01c-1.76-2.93-2.62-7.67-2.62-14.2c0-7.61,2.74-13.78,8.19-18.48C26.67,2.35,33.79,0,42.58,0 c8.76,0,15.88,2.35,21.36,7.06c5.45,4.7,8.19,10.87,8.19,18.48c0,6.54-1.82,12.9-5.42,19.14c-0.31,0.7-0.6,1.72-0.83,3.08 l-1.09,7.15L52.96,60.6L52.96,60.6L52.96,60.6z M58.53,62.57l-2.11,8.4l-5.16,4.53c-0.89,1.74-2.07,3.08-3.58,3.95 c-1.49,0.87-3.25,1.31-5.3,1.31c-4.07,0-7-1.74-8.88-5.26l-5.14-4.53l-2.12-8.4l3.05-0.78c0.35,0.87,0.58,1.51,0.75,1.98 c1.3,2.99,2.74,4.97,4.26,5.93c1.56,0.96,4.12,1.45,7.76,1.45c4.04,0,6.86-0.46,8.39-1.36c1.56-0.91,3-2.9,4.27-6.02 c0.17-0.47,0.43-1.1,0.78-1.98L58.53,62.57L58.53,62.57L58.53,62.57z M42.64,46.3c-1.01,1.69-2.05,3.2-3.13,4.5 c-1.36,1.54-2.03,2.73-2.03,3.57c0,0.9,0.26,1.6,0.81,2.07c0.52,0.43,1.29,0.66,2.34,0.66c0.6,0,1.29-0.23,2.01-0.66 c0.72,0.43,1.41,0.66,2.02,0.66c2.11,0,3.14-0.92,3.14-2.82c0-0.79-0.66-1.95-2.01-3.49C44.63,49.44,43.59,47.96,42.64,46.3 L42.64,46.3z M23.21,39.42c0,5.43,2.33,8.16,7,8.16c4.73,0,7.1-2.93,7.1-8.77c0-4.82-2.28-7.23-6.84-7.23 c-2.41,0-4.23,0.63-5.45,1.94C23.82,34.83,23.21,36.81,23.21,39.42L23.21,39.42L23.21,39.42z M48.23,39.42 c0,5.43,2.36,8.16,7.1,8.16c4.72,0,7.08-2.93,7.08-8.77c0-2.44-0.57-4.24-1.72-5.43c-1.15-1.19-2.88-1.8-5.19-1.8 C50.66,31.58,48.23,34.19,48.23,39.42L48.23,39.42L48.23,39.42z"/></g>
    </svg>
    </h1>`;
  }
};

// Typing Animation using Typed JS
var typed = new Typed(".type", {
  strings: ["a Django", "an Android", "a Frontend","a Python"],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});
