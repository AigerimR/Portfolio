//Sticky Navbar
window.onscroll = function () {
  stickyNavbar();
};

const navbar = document.querySelector(".nav-name");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// For animation on scroll
const elements = document.querySelectorAll(".hidden");

const activateFunction = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
let observer = new IntersectionObserver(activateFunction, {
  root: null,
  threshold: 0.15,
});
elements.forEach((e) => {
  observer.observe(e);
});

// submit form cleared
// const form = document.getElementById("form");
// const inputFields = document.querySelectorAll(".input-field");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   inputFields.forEach((input) => (input.value = ""));
// });
