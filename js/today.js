const today = document.querySelector("h2#today"); //HTML h2 #today 선택



function getToday() {

    const todaydate = new Date();
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '긑요일', '토요일'];
    const days_num = todaydate.getDay();

    const year = todaydate.getFullYear();
    const month = todaydate.getMonth() + 1;
    const date = todaydate.getDate();
    const day = days[days_num];


    today.innerText = `${year}년 ${month}월 ${date}일 ${day}`;

}
getToday();
