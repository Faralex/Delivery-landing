const burger = document.querySelector(".section-header__burger");
const menu = document.querySelector(".section-header__right");
const firstRadio = document.querySelector("#radio1");

firstRadio.checked = true;

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    console.log("contains");
    hideScroll();
  } else {
    console.log("not contains");
    showScroll();
  }
});

const hideScroll = () => {
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = "hidden";
};

const showScroll = () => {
  document.body.style.paddingRight = "";
  document.body.style.overflow = "visible";
};

const resetNav = () => {
  showScroll();
  burger.classList.remove("active");
  menu.classList.remove("active");
};

window.addEventListener("resize", resetNav);

const getScrollbarWidth = () => {
  const outer = document.createElement("div");

  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  outer.style.width = "50px";
  outer.style.height = "50px";
  outer.style.overflow = "scroll";
  outer.style.visibility = "hidden";

  document.body.appendChild(outer);
  const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return scrollBarWidth;
};
