const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// toDos 배열은 toDo의 삭제기능을 만들때 cleanToDos와 교체되어야 하기 때문에 const가 아닌 let으로 선언한다.
let toDos = [];

// todo의 삭제기능. html 상에서도 삭제하고, filter 함수를 이용해서 delBtn을 누른 li의 id와 Local Storage에 저장된 그 toDo의 id를 체크해서 
// 삭제버튼이 눌리지 않은 toDo들만 cleanToDos라는 array로 배출하고, 그 cleanToDos를 toDos에 넣는다.
// 그리고 그 toDos를 가지고 saveToDos 함수를 다시 돌리면, 삭제된것만 빠진 나머지 toDo 들만 저장된다.
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {

    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos(toDos);
}

// Local Storage에 todo를 넣어주는 기능
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// todo 항목을 보여지게끔 하기 위하여 toDoList 라는 ul태그에다가 del버튼을 포함한 li 한 줄을 생성해주는 함수.
// 또한 li를 다 생성한 후에는 saveToDos를 동작시켜서 Local Storage에도 해당 todo를 저장 시켜준다.
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  // delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

// form태그에서 입력한 todo를 받아서 paintToDo를 실행시켜서 Local Stoarge에 저장 및 화면에 출력시켜주는 함수.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

// Local Storage에 저장된 todo가 있을 경우, paintToDo를 실행시켜서 화면에 li를 만들어 출력해준다.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => {
      paintToDo(toDo.text);
    });
  } else {

  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
};

init();