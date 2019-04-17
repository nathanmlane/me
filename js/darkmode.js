// JQuery Function -- Dark Mode -- Insprired and Adjusted From -- https://codepen.io/jascha/pen/mjReVZ

//set starting point for dark mode, working on storing that value in sessionStorage so save state of the button through reload

var darkModeEnabled = sessionStorage.getItem('darkModeEnabled') === 'true';
if (darkModeEnabled) {
  $("body").toggleClass('day');
  $("p").toggleClass('light');
  $("h1").toggleClass('light');
  $("h2").toggleClass('light');
  $("h3").toggleClass('light');
  $("h4").toggleClass('light');
  $("h5").toggleClass('light');
  $("h6").toggleClass('light');
  $("li").toggleClass('light');
  $("a").toggleClass('light');
  $("button").toggleClass('light');
  $(".nav").toggleClass('light');
  $("nav-title").toggleClass('light');
  $(".mockup-img").toggleClass('light');
} else {
  $("body").toggleClass('night');
  $("p").toggleClass('dark');
  $("h1").toggleClass('dark');
  $("h2").toggleClass('dark');
  $("h3").toggleClass('dark');
  $("h4").toggleClass('dark');
  $("h5").toggleClass('dark');
  $("h6").toggleClass('dark');
  $("li").toggleClass('dark');
  $("a").toggleClass('dark');
  $("button").toggleClass('dark');
  $(".nav").toggleClass('dark');
  $("nav-title").toggleClass('dark');
  $(".mockup-img").toggleClass('dark');
}

let toggleDarkMode = function() {
  var currentClass = $("body").attr('class');
  console.log(currentClass);
  if(darkModeEnabled) {

    darkModeEnabled = 'false';
    sessionStorage.setItem('darkModeEnabled', 'false');

  } else {

    darkModeEnabled = 'true';
    sessionStorage.setItem('darkModeEnabled', 'true');

  }

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
  $(".nav").toggleClass('dark light');
  $("nav-title").toggleClass('dark light');
  $(".mockup-img").toggleClass('dark light');

}

//sessionStorage.setItem('dark', 'true');
//let mode = sessionStorage.getItem('dark');

//if(sessionStorage.getItem('dark') != 'true'){
//sessionStorage.setItem('dark', 'false');
//} else {
//sessionStorage.setItem('dark', 'true');
//}

$("#sun-moon").click(toggleDarkMode);
