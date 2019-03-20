//Custom JS -- Mobile Menu

function openMobileNav() {

  //Selects mobile-nav div, which defaults to display:none; | toggling it between display: flex and none

  var nav = document.getElementById("mobile-nav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

  //Styles the toggled menu div
  var header = document.getElementById("header");
  header.classList.toggle("toggle-menu");

  //Styles the menu button used to close
  var close = document.getElementById("close");
  close.classList.toggle("close");

  //hides the content behind the menu div
  var x = document.getElementById("hide-bg");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }

};

// JQuery Function -- Anchor Link Scroll -- https://codepen.io/nxworld/pen/OyRrGy

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// JQuery Function -- Dark Mode --

//set starting point for dark mode, store that value in sessionStorage, use if statement to toggle correctly;

let toggleDarkMode = function() {
  $("body").toggleClass('night day');
  $("p").toggleClass('dark light');
  $("h1").toggleClass('dark light');
  $("h2").toggleClass('dark light');
  $("h3").toggleClass('dark light');
  $("h4").toggleClass('dark light');
  $("h5").toggleClass('dark light');
  $("h6").toggleClass('dark light');
  $("li").toggleClass('dark light');
  $("a").toggleClass('dark light');
  $("button").toggleClass('dark light');
  $("nav").toggleClass('dark light');
  $("nav-title").toggleClass('dark light');
}

$("#sun-moon").click(toggleDarkMode);
