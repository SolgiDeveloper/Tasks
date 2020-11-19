let enterButton = document.getElementById("enter");
let taskHolder = document.getElementById("task");
let btnClear = document.getElementById("btn-clear");
let btnCompleted = document.getElementById("btn-completed");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let task = 0;

function taskClearAll() {
  let li = document.getElementsByTagName("li");
  let item = li.length;
  for (let key = 0; key < item; key++) {
    li[key].classList.add("delete");
  }
  task = 0;
  teskHandler();
}
function taskClearCompleted() {
  let li = document.getElementsByTagName("li");
  let item = li.length;
  for (let key = 0; key < item; key++) {
    if (li[key].classList == "done") {
      li[key].classList.remove("done");
      task += 1;
      teskHandler();
    }
  }
}
function inputLenght() {
  return input.value.length;
}
function teskHandler() {
  console.log("btn", task);
  taskHolder.innerHTML = `(${task})`;
  if (task === 0) {
    taskHolder.classList.add("delete");
  } else if (task >= 1) {
    taskHolder.classList.remove("delete");
  }
}
function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  function crossOut() {
    li.classList.toggle("done");
    if (li.classList == "done") {
      task -= 1;
      teskHandler();
    } else if (li.classList == "") {
      task += 1;
      teskHandler();
    }
  }
  li.addEventListener("click", crossOut);
  let dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("×"));
  dBtn.classList.add("mybtn");
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    if (li.classList == "done") {
      teskHandler();
    } else if (li.classList == "") {
      task -= 1;
      teskHandler();
    }
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    task += 1;
    teskHandler();
    createListElement();
  }
}

function addListAfterClickKeyPress(event) {
  if (inputLenght() > 0 && event.which === 13) {
    task += 1;
    teskHandler();
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterClickKeyPress);
btnClear.addEventListener("click", taskClearAll);
btnCompleted.addEventListener("click", taskClearCompleted);
