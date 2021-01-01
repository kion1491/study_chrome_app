const body = document.querySelector("body");

// const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log("finished loading");
}

// image를 골라서 배경으로 넣어주는 코드. body.append를 쓰지 않은 이유는 배경이미지가 로드되면 다른 dom들을 다 가려버리게 되기 때문에 순서를 제일 
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * 6);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();