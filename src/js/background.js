const timeNow = new Date().getHours();

//Change the background based on the day time

switch (timeNow) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.body.style.backgroundImage = "url(./src/assets/12-dawn.png)";
    break;
  case 6:
    document.body.style.backgroundImage = "url(./src/assets/1-sunrise.png)";
    break;
  case 7:
  case 8:
    document.body.style.backgroundImage = "url(./src/assets/2-sunrise.png)";
    break;
  case 9:
  case 10:
    document.body.style.backgroundImage = "url(./src/assets/3-morning.png)";
    break;
  case 11:
    document.body.style.backgroundImage = "url(./src/assets/4-morning.png)";
    break;
  case 12:
  case 13:
    document.body.style.backgroundImage = "url(./src/assets/5-halfday.png)";
    document.body.style.backgroundPosition = "top";
    break;
  case 14:
  case 15:
    document.body.style.backgroundImage = "url(./src/assets/6-afternoon.png)";
    break;
  case 16:
    document.body.style.backgroundImage = "url(./src/assets/7-afternoon.png)";
    break;
  case 17:
    document.body.style.backgroundImage = "url(./src/assets/8-sunset.png)";
    break;
  case 18:
    document.body.style.backgroundImage = "url(./src/assets/9-sunset.png)";
    break;
  case 19:
  case 20:
  case 21:
  case 22:
    document.body.style.backgroundImage = "url(./src/assets/10-night.png)";
    break;
  case 23:
  case 24:
    document.body.style.backgroundImage = "url(./src/assets/11-night.png)";
    break;
  default:
    break;
}

// Change the icon based on day enlightment
function setFavicons() {
  let head = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");

  if (timeNow > 18) {
    setFavicon.setAttribute("href", "./src/assets/moon.png");
    head.appendChild(setFavicon);
    return;
  }

  setFavicon.setAttribute("href", "./src/assets/sunny.png");
  head.appendChild(setFavicon);
}
setFavicons();
