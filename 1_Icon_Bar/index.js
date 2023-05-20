const verticalBarEl = document.querySelector(".vertical-bar");
const verticalBarLinkEls = document.querySelectorAll(".vertical-bar__link");
const horizontalBarEl = document.querySelector(".horizontal-bar");
const horizontalBarLinkEls = document.querySelectorAll(".horizontal-bar__link");
const activeLink = (links, parent) => {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      parent.querySelector(".active").classList.remove("active");
      link.classList.add("active");
    });
  });
};
activeLink(verticalBarLinkEls, verticalBarEl);
activeLink(horizontalBarLinkEls, horizontalBarEl);
