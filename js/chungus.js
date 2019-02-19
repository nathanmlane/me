function openMobileNav() {
  var nav = document.getElementById("mobile-nav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

  var header = document.getElementById("header");
  header.classList.toggle("toggle-menu");

  var close = document.getElementById("close");
  close.classList.toggle("close")
}
