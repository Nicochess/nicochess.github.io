export const soundEffect = () => {
  const buttons = document.querySelectorAll(".menu__item");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const sound = new Audio("./src/assets/hoversound.wav");
      sound.play();
    });

    button.addEventListener("click", (e) => {
      const backButton = e.target.classList.value.includes("back");
      if (backButton) {
        const sound = new Audio("./src/assets/backsound.wav");
        sound.play();
        return;
      }

      const sound = new Audio("./src/assets/clicksound.wav");
      sound.play();
    });
  });
};

soundEffect();
