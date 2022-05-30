import { backgroundMusic } from "./backgroundMusic.js";
import { contactme } from "./contactme.js";
import { skills } from "./skills.js";
import { soundEffect } from "./soundEffect.js";

const container = document.querySelector(".container");

export const buildMenu = () => {
  const menu = document.createElement("section");
  const title = document.createElement("h1");

  title.classList.add("title");
  menu.classList.add("menu");

  title.innerText = "Nicochess";

  menu.innerHTML = `
    <button class="menu__item aboutme">About Me</button>
    <button class="menu__item skills">Skills</button>
    <button class="menu__item contactme">Contact Me</button>
    `;

  container.appendChild(title);
  container.appendChild(menu);

  contactme()
  skills()
  soundEffect()
  backgroundMusic()
};
