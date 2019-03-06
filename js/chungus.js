//Custom JS -- Mobile Menu

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
};

// JQuery Function -- Anchor Link Scroll -- https://codepen.io/nxworld/pen/OyRrGy

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
