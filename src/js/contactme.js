import { back } from "./back.js";
import { soundEffect } from "./soundEffect.js";

export const contactme = () => {
  const button = document.querySelector(".contactme");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.innerHTML = `
      <a class="menu__item" target="_blank" href="https://github.com/Nicochess"target="_blank" >
        <span class="github"></span>
        GitHub
      </a>
      <a class="menu__item" target="_blank" href="https://www.linkedin.com/in/nicolasmagnoo/">
        <span class="linkedin"></span>
        Linkedin
      </a>
      <a class="menu__item" target="_blank" href="mailto:nicolasmagno.100@gmail.com">
        <span class="email"></span>
        Email
      </a>
      <button class="menu__item" target="_blank">
        <span class="discord"></span>
        Nicochess#6374
      </button>
      <button class="menu__item home">
        <span class="back"></span>
        Back
      </button>
      `;

    soundEffect()
    back();
  });
};
