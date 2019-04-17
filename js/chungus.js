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

//Skill Bar Progression -- https://codepen.io/Tushkiz/pen/lntvd

$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 1500 });
			});
});
