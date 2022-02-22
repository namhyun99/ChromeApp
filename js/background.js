const images = ["1.jpg", "2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


// const bgImage = document.createElement("img"); // 자바스크립트로 html 추가
// bgImage.src = `./img/${chosenImage}`; // img src 태그와 동일
// document.body.appendChild(bgImage); // body 태그에 html 코드 삽입

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
