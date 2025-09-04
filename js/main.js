AOS.init({ duration: 500 });

// MODIFIERS
const modifiers = {
  dark: "dark",
  active: "toggler__img--active",
  scroll: "site-header--scroll",
  content: "site-header__img-content-wrapper--none",
  toggler: "toggler--block",
  scrollTop: "scroll-site-top--block",
  block: "hamburger__bar--block",
  prev: "back--view",
  overflow: "overflow-y",
};

// VARIABLES
const elLoader = document.querySelector(".lds-spinner-wrapper"),
  theme = localStorage.getItem("theme", "dark"),
  elDarkModeToggle = document.querySelector(".js-toggle"),
  elDarkModeToggleImgMoon = document.querySelector(".toggler__img--moon"),
  elDarkModeToggleImgSun = document.querySelector(".toggler__img--sun"),
  elSiteHeader = document.querySelector(".site-header"),
  elScrollTop = document.querySelector(".js-scroll"),
  elsId = document.querySelectorAll(".js-id"),
  elHamburger = document.querySelector(".js-hamburger"),
  elHamburgerToggle = document.querySelector(".js-hamburger-toggle"),
  elSiteHeaderContentWrapper = document.querySelector(
    ".site-header__img-content-wrapper"
  ),
  elBack = elSiteHeader.querySelector(".js-prev-page");

// FUNCTION
function removeActiveAddActive() {
  elDarkModeToggleImgMoon.classList.remove(modifiers.active);
  elDarkModeToggleImgSun.classList.add(modifiers.active);
}

function addActiveRemoveActive() {
  elDarkModeToggleImgMoon.classList.add(modifiers.active);
  elDarkModeToggleImgSun.classList.remove(modifiers.active);
}

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    elLoader.classList.add("lds-spinner-wrapper--none");
  }, 800);
  if (theme === "dark") {
    document.body.classList.add(modifiers.dark);
    removeActiveAddActive();
  } else {
    document.body.classList.remove(modifiers.dark);
    addActiveRemoveActive();
  }
});

// SCROLL
window.addEventListener("scroll", function () {
  let element = window.scrollY;
  if (element > 0) {
    elSiteHeader.classList.add(modifiers.scroll);
    elSiteHeaderContentWrapper.classList.add(modifiers.content);
    elScrollTop.classList.add(modifiers.scrollTop);
    elDarkModeToggle.classList.add(modifiers.toggler);
    if (elHamburgerToggle) {
      elHamburgerToggle.classList.add(modifiers.block);
    }
    if (elBack) {
      elBack.classList.add(modifiers.prev);
    }
  } else {
    elSiteHeader.classList.remove(modifiers.scroll);
    elSiteHeaderContentWrapper.classList.remove(modifiers.content);
    elScrollTop.classList.remove(modifiers.scrollTop);
    elDarkModeToggle.classList.remove(modifiers.toggler);
    if (elHamburgerToggle) {
      elHamburgerToggle.classList.remove(modifiers.block);
    }
    if (elBack) {
      elBack.classList.remove(modifiers.prev);
    }
  }
});

// TOGGLE
elDarkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle(modifiers.dark);
  if (document.body.classList.contains(modifiers.dark)) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  elDarkModeToggleImgMoon.classList.toggle(modifiers.active);
  elDarkModeToggleImgSun.classList.toggle(modifiers.active);
});

// HAMBURGER
if (elHamburgerToggle) {
  elHamburgerToggle.addEventListener("click", function () {
    elHamburger.classList.toggle("hamburger__sitenav--active");
  });
}

// ID
if (elsId) {
  elsId.forEach(function (id) {
    id.addEventListener("click", function () {
      elHamburger.classList.toggle("hamburger__sitenav--active");
    });
  });
}
