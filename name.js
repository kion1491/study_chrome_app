const form = document.querySelector(".nameForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// Local Storage에 key, value를 저장하는 함수 
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// form을 통해 user name을 입력받을 경우 동작하는 함수
// event.preventDefault(); 를 통해 form 태그에서 입력을 받게 될 경우 default로 동작하는 '새로고침' 현상을 막아준다.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// user name 입력받는 form을 보이게 하고, 입력 받는 기능 까지 들어간 함수
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit)
}

// user name을 입력받고나면, 혹은 입력받았던 user name이 있을 경우 동작시킬 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// Local Storage에 이미 입력받은 user name이 있는지 체크해서,
// 없으면 askForName 동작.
// 있으면 paintGreeting 동작.
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName();
}

init();