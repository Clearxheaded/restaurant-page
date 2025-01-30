import loadHome from "./home";
import loadMenu from "./menu";
import loadAboutUs from "./aboutUs";

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutUsButton = document.querySelector("#about-us-btn");

homeButton.addEventListener("click", () => {
    loadHome();
});
menuButton.addEventListener("click", () => {
    loadMenu();
});
aboutUsButton.addEventListener("click", () => {
    loadAboutUs();
})

window.onload = () => {
    loadHome();
}
