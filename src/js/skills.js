import { back } from "./back.js";
import { soundEffect } from "./soundEffect.js";

export const skills = () => {
  const button = document.querySelector(".skills");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.classList.add('menu__grid')

    menuContainer.innerHTML = `
    <div class="menu__item">
      <img src="./src/assets/html.png" loading="eager" alt="Html Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/css.png" loading="eager" alt="Css Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/javascript.png" loading="eager" alt="Javascript Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/sass.png" loading="eager" alt="Sass Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/react.jpg" loading="eager" alt="React Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/firebase.png" loading="eager" alt="Firebase Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/node.png" loading="eager" alt="Node Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/git.png" loading="eager" alt="Git Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/figma.png" loading="eager" alt="Figma Icon">
    </div>
    <button class="menu__item back">Back</button>
      `;

      soundEffect()
      back()
  });
};
