const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden"; // 중요한 정보를 작성할때 대문자로 표기.
const USERNAME_KEY = "username"; // 오타방지 변수선언

function onLoginSubmit(event) {
    event.preventDefault();   // form태그의 새로고침하는 기본동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden  이라는 클래스에 값추가
    localStorage.setItem(USERNAME_KEY, loginInput.value); // 로컬스토리지에 데이터값 저장.// 인풋값을 변수에 받아옴
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; // 문자출력
    greeting.classList.remove(HIDDEN_CLASSNAME);// h1 태그 class에 저장된 hidden 삭제
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {                       // 로컬에 저장된 값이 null 일때
    loginForm.classList.remove(HIDDEN_CLASSNAME);   // form태그 class에 저장된 hidden을 삭제
    loginForm.addEventListener("submit", onLoginSubmit) // 이후 submit 이벤트 실행
} else {
    paintGreetings();
}