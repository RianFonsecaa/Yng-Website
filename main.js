$(document).ready(function () {
  var owlCarousel = $(".owl-carousel");

  owlCarousel.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },

      600: {
        items: 3,
      },

      1000: {
        items: 4,
      },

      1400: {
        items: 5,
      },

      1800: {
        items: 6,
      },
    },
  });

  $("#equipa-next").click(function () {
    owlCarousel.trigger("next.owl.carousel");
  });
});

const sobreLink = document.getElementById("sobre-link");
const megaDropdown = document.querySelector(".header-section .mega-dropdown");
const firstItem = megaDropdown.querySelector("li:first-child");
let activeItem = firstItem;

const setActive = (item) => {
  if (activeItem) {
    activeItem.querySelector("div a").style.color = "";
    activeItem.querySelector("div img").style.opacity = "";
    activeItem.querySelector(".description").style.opacity = "";
    activeItem.querySelector(".description").style.maxHeight = "";
  }
  item.querySelector("div a").style.color = "#e74f3d";
  item.querySelector("div img").style.opacity = "1";
  item.querySelector(".description").style.opacity = "1";
  item.querySelector(".description").style.maxHeight = "500px";
  activeItem = item;
};

window.addEventListener("DOMContentLoaded", () => setActive(firstItem));

sobreLink.addEventListener("click", (e) => {
  e.preventDefault();
  megaDropdown.classList.toggle("active");
});

["click", "scroll", "resize", "wheel", "touchstart"].forEach((evt) => {
  window.addEventListener(evt, (e) => {
    if (
      evt === "click" &&
      (sobreLink.contains(e.target) || megaDropdown.contains(e.target))
    )
      return;
    megaDropdown.classList.remove("active");
  });
});

megaDropdown.querySelectorAll("li").forEach((item) => {
  item.addEventListener("mouseenter", () => setActive(item));
});
