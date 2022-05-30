import { back } from "./back.js";

export const skills = () => {
  const button = document.querySelector(".skills");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.classList.add('menu__grid')

    menuContainer.innerHTML = `
    <div class="menu__item">
      <img src="./src/assets/html.png" alt="Html Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/css.png" alt="Css Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/javascript.png" alt="Javascript Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/sass.png" alt="Sass Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/react.jpg" alt="React Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/firebase.png" alt="Firebase Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/node.png" alt="Node Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/git.png" alt="Git Icon">
    </div>
    <div class="menu__item">
      <img src="./src/assets/figma.png" alt="Figma Icon">
    </div>
    <button class="menu__item back">Back</button>
      `;

      back()
  });
};

skills();
