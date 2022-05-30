import { back } from "./back.js";
import { soundEffect } from "./soundEffect.js";

export const contactme = () => {
  const button = document.querySelector(".contactme");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.innerHTML = `
      <a class="menu__item github" target="_blank" href="https://github.com/Nicochess"target="_blank" >GitHub</a>
      <a class="menu__item linkedin" target="_blank" href="https://www.linkedin.com/in/nicolasmagnoo/">Linkedin</a>
      <a class="menu__item email" target="_blank" href="mailto:nicolasmagno.100@gmail.com">Email</a>
      <button class="menu__item back">Back</button>
      `;

    soundEffect()
    back();
  });
};
