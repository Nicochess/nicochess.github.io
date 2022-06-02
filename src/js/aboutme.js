import { back } from "./back.js";
import { soundEffect } from "./soundEffect.js";

export const aboutme = () => {
  const button = document.querySelector(".aboutme");
  const menuContainer = document.querySelector(".menu");

  button.addEventListener("click", () => {
    menuContainer.innerHTML = `
      <div class="menu__item aboutme" target="_blank" href="https://github.com/Nicochess"target="_blank" >
        My name is Nicolas, I'm 20 years old.
        I like to introduce myself by telling how I see the world... 
        The existence and our planet is to me, just a big question 
        and I have a real curiosity about how things work in this 
        universe once I adopt that there's no meaning in the existence, 
        I spend my years, months, weeks, days, hours, and minutes creating my own.
        About the seconds? I like to laugh at the most cringe things on the internet. 
        Nice to meet you, Anonymous!
      </div>
      <button class="menu__item home">
        <span class="back"></span>
        Back
      </button>
      `;

    soundEffect()
    back();
  });
};