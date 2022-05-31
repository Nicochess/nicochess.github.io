const timeNow = new Date().getHours();
const modalStart = document.querySelector('.modal-start')

//Change the background based on the day time
switch (timeNow) {
  case 3:
  case 4:
  case 5:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/12-dawn.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "right";
    break;
  case 6:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/1-sunrise.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "left";
    break;
  case 7:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/2-sunrise.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "left";
    break;
  case 8:
  case 9:
  case 10:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/3-morning.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "left";
    break;
  case 11:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/4-morning.png)";
    break;
  case 12:
  case 13:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/5-halfday.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "top";
    break;
  case 14:
  case 15:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/6-afternoon.png)";
    break;
  case 16:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/7-afternoon.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "right";
    break;
  case 17:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/8-sunset.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "right";
    break;
  case 18:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/9-sunset.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "right";
    break;
  case 19:
  case 20:
  case 21:
  case 22:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/10-night.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "left";
    break;
  case 23:
  case 24:
  case 0:
  case 1:
  case 2:
    document.body.style.backgroundImage = modalStart.style.backgroundImage = "url(./src/assets/11-night.png)";
    document.body.style.backgroundPosition = modalStart.style.backgroundPosition = "top";
    break;
  default:
    break;
}
