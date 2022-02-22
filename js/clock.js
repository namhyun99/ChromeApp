const clock = document.querySelector("h2#clock"); //HTML h2 #clock 선택


function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    // 시간을 불러오고, 숫자를 문자로 바꾼후 padstart로 두자리수 표현
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds} `;


}


getClock();  // 바로 노출되도록 함수 선언, 이것만 선언하면 시간만 노출됨.
setInterval(getClock, 1000);  // 1초마다 반복하여 실행





