const GradeValue = localStorage.getItem('gradeValue');
const Title = localStorage.getItem('title');
const Matters = localStorage.getItem('matters');
const ymd = localStorage.getItem('newDate');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const userNum = localStorage.getItem('number');
const userName = localStorage.getItem('name');

let isTeacher = false;

if (userNum == '0000') {
    isTeacher = true;
    yes.innerText = '학생 조회';
    no.innerText = '설문 종료';
}
const contentss = document.querySelector('.contents h2');
const showGrades = document.querySelector('.showGrade');
const title = document.querySelector('.arguement-title');
const topd = document.querySelector('.top');
const dateBox = document.createElement('div');
dateBox.className = 'dateBox';
topd.appendChild(dateBox);
showGrades.innerText = `${GradeValue}학년`;
switch (GradeValue.length) {
    case 1: {
        switch (GradeValue[0]) {
            case '3':
                showGrades.style.backgroundColor = '#F3D6D4';
                break;
            case '2':
                showGrades.style.backgroundColor = '#CDD7EB';
                break;
            case '1':
                showGrades.style.backgroundColor = '#F3F4BF';
                break;
        }
        break;
    }
    case (2, 3, 4, 5): {
        showGrades.style.backgroundColor = '#B9DDBD';
    }
}
title.innerText = Title;
title.style.width = '1150px';
title.style.margin = '0 0 0 50px';
dateBox.innerText = ymd;
contentss.innerText = Matters;
contentss.style.fontWeight = '100';

const handleClick = (e) => {
    if (isTeacher) {
        if (e.target.classList[0] == 'yes') {
            location.href = '../pages/Application-List.html';
        } else {
            localStorage.removeItem('matters');
            localStorage.removeItem('gradeValue');
            localStorage.removeItem('title');
            localStorage.removeItem('newDate');
            localStorage.removeItem('YMD');
            alert('처리되었습니다');
            location.href = '../pages/Main.html';
        }
    } else {
        localStorage.setItem('answer', [
            userNum,
            userName,
            e.target.classList[0],
        ]);
        alert('처리되었습니다');
        location.href = '../pages/Main.html';
    }
};
yes.addEventListener('click', handleClick);
no.addEventListener('click', handleClick);
