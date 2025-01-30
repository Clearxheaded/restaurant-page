import loadHome from "./home";
import loadMenu from "./menu";
import loadAboutUs from "./aboutUs";
import "./styles.css";

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutUsButton = document.querySelector("#about-us-btn");

function setActiveButton(button) {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    aboutUsButton.classList.remove("active");

    button.classList.add("active");
}

homeButton.addEventListener("click", () => {
    loadHome();
    setActiveButton(homeButton);
});

menuButton.addEventListener("click", () => {
    loadMenu();
    setActiveButton(menuButton);
});

aboutUsButton.addEventListener("click", () => {
    loadAboutUs();
    setActiveButton(aboutUsButton);
});

window.onload = () => {
    loadHome();
}
