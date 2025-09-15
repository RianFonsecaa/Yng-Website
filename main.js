/* Carrossel */
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

  $(".equipa-next").click(function () {
    owlCarousel.trigger("next.owl.carousel");
  });
});

/* Mega-dropdown */
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

["resize"].forEach((evt) => {
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

/* Botão para controle do vídeo */

document.addEventListener("click", (e) => {
  const container = e.target.closest(".video-section");
  if (!container) return;

  const video = container.querySelector(".video");
  const botao = container.querySelector(".custom-video-button");

  if (video.paused) {
    video.play();
    container.classList.remove("paused");
    container.classList.add("playing");
    botao.innerHTML = `
               <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 1H2V15H7V1Z" fill="currentColor"></path> <path d="M14 1H9V15H14V1Z" fill="currentColor"></path> </g></svg>
      `;
  } else {
    video.pause();
    container.classList.remove("playing");
    container.classList.add("paused");
    botao.innerHTML = `
<svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M464.7,221.5L86.1,7.3C52.5-11.7,25,7.5,25,50v412c0,42.5,27.5,61.7,61.1,42.7l378.6-214.1 C498.2,271.5,498.2,240.5,464.7,221.5z"
            ></path>
          </g>
        </svg>
      `;
  }
});
