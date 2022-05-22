const headerClose = document.getElementById("closeBtn");
const headerNavbar = document.getElementById("hidenNav");
const burger = document.getElementById("burger");
const body = document.body;

burger.onclick = () => {
  headerNavbar.classList.add("open");
  body.style.overflowY = "hidden";
};

headerClose.onclick = () => {
  body.style.overflowY = "visible";
  headerNavbar.classList.remove("open");
};
