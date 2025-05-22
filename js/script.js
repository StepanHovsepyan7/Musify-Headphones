let changeMode = document.getElementsByClassName("mode")[0];
let sunIcon =
  document.getElementsByClassName("fa-sun")[0] ||
  document.getElementsByClassName("fa-moon")[0];
let topParagraph = document.getElementsByClassName("topParagraph")[0];
let body = document.querySelector("body");
let trendsCard = document.querySelectorAll(".trendsCard");
let descriptionHeadphones = document.querySelectorAll(".descriptionHeadphones");
let typeOfHeadphones = document.querySelectorAll(".typeOfHeadphones");
let previousPrice = document.querySelectorAll(".previousPrice");
let titles = document.querySelectorAll("h1");
let navigationA = document.querySelectorAll(".navigation a");
let navIconsA = document.querySelectorAll(".navIcons a");
let faarrowdown = document.getElementsByClassName("fa-arrow-down")[0];
let menuIcon = document.getElementsByClassName("menuIcon")[0];
let headerNav = document.getElementsByClassName("headerNav")[0];
let topBtn2 = document.getElementsByClassName("topBtn2")[0];
let timerClock = document.querySelectorAll(".timerClock");
let fabarsA = document.querySelector(".fabarsA");
let blackBackGround = document.getElementsByClassName("blackBackGround")[0];
let mobileParent = document.getElementsByClassName("mobileParent")[0];
let closeNav = document.getElementById("closeNav");
let menulink2 = document.querySelectorAll(".menu-link2");
let mobileMode = document.getElementsByClassName("mobileMode")[0];
let faSunMobile = document.getElementsByClassName("fa-sun-mobile")[0];

function windowSize() {
  let isLightMode = sunIcon.classList.contains("fa-moon");
  let isDarkMode = sunIcon.classList.contains("fa-sun");

  if (window.innerWidth <= 470) {
    descriptionHeadphones.forEach((e) => {
      e.style.background = isLightMode ? "#282828B2" : "";
      e.style.border = isLightMode ? "1px solid #0000001F" : "";
    });

    previousPrice.forEach((e) => {
      e.style.color = isLightMode ? "#FFFFFF" : "#000000";
    });
    typeOfHeadphones.forEach((e) => {
      e.style.color = isLightMode ? "#FFFFFF" : "#000000";
    });
  } else {
    descriptionHeadphones.forEach((e) => {
      e.style.background = "";
      e.style.border = "";
    });

    previousPrice.forEach((e) => {
      e.style.color = isLightMode ? "#000000" : "#FFFFFF";
    });
    typeOfHeadphones.forEach((e) => {
      e.style.color = isLightMode ? "#000000" : "#FFFFFF";
    });
  }

  if (isDarkMode) {
    previousPrice.forEach((e) => {
      e.style.color = isLightMode ? "#000000" : "#FFFFFF";
    });
    typeOfHeadphones.forEach((e) => {
      e.style.color = isLightMode ? "#000000" : "#FFFFFF";
    });
  }
}

changeMode.addEventListener("click", () => {
  let isDarkMode = sunIcon.classList.contains("fa-moon");

  if (isDarkMode) {
    sunIcon.classList.remove("fa-moon");
    sunIcon.classList.add("fa-sun");
    body.classList.remove("bodycolor");
    headerNav.style.background = "";
    topParagraph.classList.remove("light-mode-text");
    timerClock.forEach((e) => {
      e.classList.remove("timerLight");
    });

    faarrowdown.style.border = "";
    faarrowdown.style.color = "";
    menuIcon.style.color = "";

    navIconsA.forEach((e) => {
      e.classList.add("dark-mode");
      e.classList.remove("lightMode");
    });

    navigationA.forEach((e) => {
      e.style.color = "white";
    });

    titles.forEach((title) => {
      title.classList.add("dark-mode");
      title.classList.remove("lightMode");
    });
    trendsCard.forEach((e) => {
      e.style.background = "";
    });
    descriptionHeadphones.forEach((e) =>
      e.classList.replace("light-mode2", "dark-mode")
    );
    previousPrice.forEach((e) => {
      e.classList.add("dark-mode");
      e.classList.remove("lightMode");
    });

    typeOfHeadphones.forEach((e) => {
      e.classList.add("dark-mode");
      e.classList.remove("lightMode");
    });
  } else {
    sunIcon.classList.remove("fa-sun");
    sunIcon.classList.add("fa-moon");
    body.classList.add("bodycolor");
    headerNav.style.background = `linear-gradient(
            116.15deg,
            rgba(192, 192, 192, 0.63) -10.88%,
            rgba(255, 255, 255, 0.49) -10.87%,
            rgba(255, 255, 255, 0.07) 74.79%
        )`;
    headerNav.style.backdropFilter = "blur(30px)";
    topParagraph.classList.add("light-mode-text");
    faarrowdown.style.border = "1px solid black";
    faarrowdown.style.color = "black";
    menuIcon.style.color = "black";
    timerClock.forEach((e) => {
      e.classList.add("timerLight");
    });

    navigationA.forEach((e) => {
      e.style.color = "black";
    });

    navIconsA.forEach((e) => {
      e.classList.remove("dark-mode");
      e.classList.add("lightMode");
    });

    titles.forEach((title) => {
      title.classList.toggle("lightMode");
      title.classList.remove("dark-mode");
    });
    trendsCard.forEach((e) => {
      e.style.background = "#282828";
    });
    descriptionHeadphones.forEach((e) =>
      e.classList.replace("dark-mode", "light-mode2")
    );
    previousPrice.forEach((e) => {
      e.classList.add("lightMode");
      e.classList.remove("dark-mode");
    });

    typeOfHeadphones.forEach((e) => {
      e.classList.add("lightMode");
      e.classList.remove("dark-mode");
    });

    topBtn2.addEventListener("mouseover", () => {
      topBtn2.style.color = "black";
    });

    topBtn2.addEventListener("mouseout", () => {
      topBtn2.style.color = "";
    });
  }

  windowSize();
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "light") changeMode.click();
});

changeMode.addEventListener("click", () => {
  let isDark = sunIcon.classList.contains("fa-moon");
  localStorage.setItem("mode", isDark ? "light" : "dark");
});

window.addEventListener("resize", windowSize);

let timer = setInterval(() => {
  let countDownDate = new Date("2030 15:37:25").getTime();

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let hoursDom = document.getElementById("hours");
  let minutesDom = document.getElementById("minutes");
  let secondsDom = document.getElementById("seconds");

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hoursDom.innerHTML = `${hours}`;
  minutesDom.innerHTML = `${minutes}`;
  secondsDom.innerHTML = `${seconds}`;
}, 1000);

// mobiel nav

mobileMode.addEventListener("click", () => {
  mobileParent.classList.toggle("lightMode");
  localStorage.setItem(
    "mobileMode",
    mobileParent.classList.contains("lightMode") ? "light" : "dark"
  );
});

mobileMode.addEventListener("click", (e) => {
  e.preventDefault();
  changeMode.click();
  if (faSunMobile.classList.contains("fa-sun")) {
    faSunMobile.classList.toggle("fa-moon");
  }
});

fabarsA.addEventListener("click", () => {
  if (blackBackGround.classList.contains("blackBackGround")) {
    blackBackGround.classList.add("blackBackGroundBlock");
    mobileParent.style.display = "block";
    body.classList.add("no-scroll");
  }
});

blackBackGround.addEventListener("click", () => {
  blackBackGround.classList.remove("blackBackGroundBlock");
  mobileParent.classList.add("hide");
  body.classList.remove("no-scroll");
});

menulink2.forEach((e) => {
  e.addEventListener("click", () => {
    blackBackGround.classList.remove("blackBackGroundBlock");
    mobileParent.classList.add("hide");
    body.classList.remove("no-scroll");
  });
});

closeNav.addEventListener("click", () => {
  blackBackGround.classList.remove("blackBackGroundBlock");
  mobileParent.classList.add("hide");
  body.classList.remove("no-scroll");
});

mobileParent.addEventListener("animationend", () => {
  if (mobileParent.classList.contains("hide")) {
    mobileParent.style.display = "none";
    mobileParent.classList.remove("hide");
  }
});
