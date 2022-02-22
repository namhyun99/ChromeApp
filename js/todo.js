const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 로컬스토리지에 데이터 저장 단 array는 저장이 되지 않음. 무조건 문자열
    //JSON.stringify 로 하면 array,string이던 그대로 저장할 수 있음.
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // evnet 세분화해서 찾기
    li.remove();  // li 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // todo 아이디와 li 아이디가 같지 않다면 todos의 데이터를 필터한다.
    // 단, li는 문자열이기 때문에 parseInt를 적용해주어 숫자열로 바꿔준다.
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.style.display = "flex";
    li.style.alignItems = "center";

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.style.fontSize = "18px"
    span.style.padding = "5px";

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li > span 부모태그선언
    li.appendChild(button);
    toDoList.appendChild(li); // appendChild 자식선언
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  // 값을 비우기전 값을 변수에 저장
    toDoInput.value = ""; // 아무리 뭘해도 위에 newTodo에 영향을 주지 않음
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse 는 자바스크립트가 array를 인식할수 있도록 해줌.
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    //forEach 는 array의 각 item에 대해 function을 실행하게 해줌.
    //item 은 어떤 item을 사용하고 있는지 확인시켜주는 기본속성
}


