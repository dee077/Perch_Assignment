const mobileView = document.querySelector(".fa-mobile-screen");
const tabletView = document.querySelector(".fa-tablet-alt");
const laptopView = document.querySelector(".fa-laptop");
let link = null;

mobileView.addEventListener("click", function () {
  if (link !== null) {
    document.head.removeChild(link);
    link = null;
  }
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "../css/mobile.css";
  document.head.appendChild(link);
});
tabletView.addEventListener("click", function () {
  if (link !== null) {
    document.head.removeChild(link);
    link = null;
  }
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "../css/tab.css";
  document.head.appendChild(link);
});
laptopView.addEventListener("click", function () {
  if (link !== null) {
    document.head.removeChild(link);
    link = null;
  }
});
