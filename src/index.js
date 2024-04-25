displayHomeContent();

import "./styles.css";
import displayHomeContent from "./modules/homeModule";
import displayMenuContent from "./modules/menuModule";
import displayAboutContent from "./modules/aboutModule";
import resetParent from "./resetParent";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const contentContainer = document.querySelector("#content");


homeButton.addEventListener("click", () => {
    resetParent(contentContainer)
    displayHomeContent();
} )

menuButton.addEventListener("click", () => {
    resetParent(contentContainer)
    displayMenuContent();
})

aboutButton.addEventListener("click", () => {
    resetParent(contentContainer)
    displayAboutContent();
})