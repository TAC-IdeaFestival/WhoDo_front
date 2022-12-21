const submitBTN = document.querySelector('.container-submitBTN');
const showGrade = document.querySelector('.showGrade');
const titleInput = document.querySelector('.titleInput');
const writeBox = document.querySelector('.writeBox');
const YYInput = document.querySelector('.YYInput');
const MMInput = document.querySelector('.MMInput');
const DDInput = document.querySelector('.DDInput');

let gradeValue = [];

const handleClick = () => {
    // 예외처리
    const title = titleInput.value;
    const YMD = `${YYInput.value}${MMInput.value}${DDInput.value}`;
    const matters = writeBox.value;
    if (gradeValue.length != 0 && title != '' && matters != '' && YMD != '') {
        if (
            !!Number(YMD) &&
            YYInput.value.length == 2 &&
            MMInput.value.length == 2 &&
            DDInput.value.length == 2
        ) {
            // 백엔드로 보내는 코드 들어갈 자리
            let url = 'https://server.the-moment-schema.site/signupInfo';
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    pw: pw,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    console.log(json);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else alert('마감일이 잘못 입력되었습니다');
    } else alert('입력되지 않은 칸이 있습니다');
};

const onClick = (e) => {
    const grade = e.target.classList[1][5];
    if (grade == 4) {
        gradeValue = [];
    } else {
        for (let i = 0; i < gradeValue.length; i++) {
            if (grade == gradeValue[i]) gradeValue.splice(i, 1);
        }
        gradeValue.push(e.target.classList[1][5]);
        gradeValue.sort();
    }
    showGrade.innerText = `대상학년 : ${gradeValue}`;
};

const grades = document.querySelectorAll('.grades');
grades.forEach((grade) => {
    grade.addEventListener('click', onClick);
});
submitBTN.addEventListener('click', handleClick);
