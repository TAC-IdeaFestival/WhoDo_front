const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pw');
const submitBTN = document.querySelector('.submitBTN');

const check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

const handleClick = () => {
    const id = idInput.value;
    const pw = pwInput.value;

    if (id != '' && pw != '') {
        if (checkPW(pw)) {
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
        }
    }
};

const checkPW = (pw) => {
    if (!check.test(pw)) {
        alert('비밀번호는 8글자 이상의 영문자, 숫자로 이루어져야 합니다');
        return false;
    }
    if (pw.length < 8 || pw.length > 16) {
        alert('비밀번호는 8 ~ 16 자리로 입력해주세요');
        return false;
    }
    return true;
};

submitBTN.addEventListener('click', handleClick);
