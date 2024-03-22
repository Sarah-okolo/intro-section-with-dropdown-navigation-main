const burgerMenu = document.getElementById("burgerIcon");
const modal = document.getElementById("modal");
const closeMenu = document.getElementById("closeMenuIcon");
const featuresDropdown = document.getElementById("featuresDropdown");
const companyDropdown = document.getElementById("companyDropdown");
const featuresSubMenu = document.querySelector(".featuresSubMenu");
const companySubMenu = document.querySelector(".companySubMenu");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const heroImage = document.getElementById("heroImage");

//opens the menu modal onclick.
burgerMenu.onclick = () => {
  modal.style.width = "100vw";
};

//closes the menu modal onclick.
closeMenu.onclick = () => {
  modal.style.width = "0";
};

//shows the featuresList submenu. onclick;
featuresDropdown.onclick = () => {
  featuresSubMenu.classList.toggle("block");
  arrow1.classList.toggle("rotate");
};

//shows the companyList submenu.
companyDropdown.onclick = () => {
  companySubMenu.classList.toggle("block");
  arrow2.classList.toggle("rotate");
};

//checks for the change in viewport, and if it is greater than 500px, then it changes the src value of the hero image to the desktop design, and uf it is less, it changes it to the mobile design.
if (window.innerWidth > 850) {
  heroImage.src = "images/image-hero-desktop.png";
} else {
  heroImage.src = "images/image-hero-mobile.png";
}
