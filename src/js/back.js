import { contactme } from "./contactme.js";
import { skills } from "./skills.js";

export const back = () => {
  const button = document.querySelector(".back");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.classList.remove('menu__grid')

    menuContainer.innerHTML = `
      <button class="menu__item aboutme">About Me</button>
      <button class="menu__item skills">Skills</button>
      <button class="menu__item contactme">Contact Me</button>
      `;

      contactme()
      skills()
  });
};
