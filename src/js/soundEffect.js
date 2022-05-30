const playAudio = (path, vol = 0.1) => {
  const sound = new Audio(path);
  sound.volume = vol;
  sound.play();
};

export const soundEffect = () => {
  const buttons = document.querySelectorAll(".menu__item");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      playAudio("./src/assets/hoversound.wav");
    });

    button.addEventListener("click", (e) => {
      const backButton = e.target.classList.value.includes("back");
      if (backButton) {
        playAudio("./src/assets/backsound.wav");
        return;
      }

      playAudio("./src/assets/clicksound.wav");
    });
  });
};
