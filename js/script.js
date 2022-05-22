const body = document.body;

const close = (element, className) => {
  body.style.overflowY = "visible";
  element.classList.remove(className);
};

const open = (element, className) => {
  body.style.overflowY = "hidden";
  element.classList.add(className);
};

const headerToggler = () => {
  const headerClose = document.getElementById("closeBtn");
  const headerNavbar = document.getElementById("hidenNav");
  const burger = document.getElementById("burger");
  const ul = document.querySelector("#hidenNav ul");

  burger.onclick = () => {
    open(headerNavbar, "open");
  };

  headerClose.onclick = () => close(headerNavbar, "open");

  ul.addEventListener("click", (e) => {
    // console.log(e.target.tagName);
    if (e.target.tagName == "A") {
      close(headerNavbar, "open");
    }
  });
};

headerToggler();
