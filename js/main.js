// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    938: {
      items: 4
    },
    1360: {
      items: 5
    }
  }
});

// Pie Chart
var skillsTopOffset = $(".skills-section").offset().top;
$(window).scroll(function() {
  if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    $(".chart").easyPieChart({
      easing: "easeInOut",
      barColor: "rgb(0, 197, 99)",
      trackColor: false,
      scaleColor: false,
      lineWidth: 5,
      size: 152,
      onStep: function(from, to, percent) {
        $(this.el)
          .find(".percent")
          .text(Math.round(percent));
      }
    });
  }
});
