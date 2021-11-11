let searchForm = document.querySelector(".search-form"),
  searchBtn = document.querySelector("#search-btn"),

  shoppingCart = document.querySelector(".shopping-cart"),
  cartBtn = document.querySelector("#cart-btn"),

  loginFrom = document.querySelector(".login-form"),
  loginBtn = document.querySelector("#login-btn"),

  menu = document.querySelector(".navbar"),
  menuBtn = document.querySelector("#menu-btn"),

  up = document.querySelector(".up");


searchBtn.onclick = function () {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginFrom.classList.remove("active");
  menu.classList.remove("active");
};

cartBtn.onclick = function () {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginFrom.classList.remove("active");
  menu.classList.remove("active");
};

loginBtn.onclick = function () {
  loginFrom.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  menu.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginFrom.classList.remove("active");
};

window.onscroll = function () {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginFrom.classList.remove("active");
  menu.classList.remove("active");

  if (window.scrollY >= 500) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  };
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};