const clockContainer = document.querySelector(".clockContainer"),
  clockTitle = clockContainer.querySelector("h1");


function timeArrg(attr) {
  return `${attr < 10 ? `0${attr}` : attr}`;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText =
    // `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
    `${timeArrg(hours)} : ${timeArrg(minutes)} : ${timeArrg(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();