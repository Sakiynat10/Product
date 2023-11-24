function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

$(document).ready(function(){
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav:true,
    items:2,
    navText: ['<img src="images/prev.svg">' , '<img src="images/next.svg">'],
    autoplay:true,
    autoplayTimeout:2000,
    responsive: {
      0: {
        items:1,
      },
      600: {
        items:2,
      },
      1000: {
        items:3,
      }
    }
  });
});