import { buildMenu } from "./buildMenu.js";

const button = document.querySelector(".start");
const modal = document.querySelector(".modal-start");

button.addEventListener("click", () => {
  modal.style.display = "none";
  buildMenu()
});
