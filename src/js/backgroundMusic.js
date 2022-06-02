import { playAudio } from "./soundEffect.js";

const timeNow = new Date().getHours();

export const backgroundMusic = () => {
  if (timeNow > 16 || timeNow < 6) {
    playAudio("./src/assets/dawmmusic.mp3", 0.05, true);
  } else if (timeNow < 9) {
    playAudio("./src/assets/sunrisemusic.mp3", 0.05, true);
  } else {
    playAudio("./src/assets/morningmusic.mp3", 0.05, true);
  }
};
