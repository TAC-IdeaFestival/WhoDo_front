const emailInput = document.querySelector('.email');
const pwInput = document.querySelector('.pw');
const pwCheckInput = document.querySelector('.pwCheck');
const nameInput = document.querySelector('.name');
const numberInput = document.querySelector('.number');
const submitBTN = document.querySelector('.submitBTN');

const check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;
const emailCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const handleClick = () => {
    try {
        const email = emailInput.value;
        const pw = pwInput.value;
        const pwCheck = pwCheckInput.value;
        const name = nameInput.value;
        const number = numberInput.value;
        if (
            email != '' &&
            pw != '' &&
            pwCheck != '' &&
            name != '' &&
            number != ''
        ) {
            if (checkPW(pw) && checkEmail(email)) {
                if (pw != pwCheck) alert('비밀번호가 일치하지 않습니다');
                else {
                    if (number.length != 4) alert('학번을 확인해주세요');
                    // 완전히 통과
                    else {
                        let url =
                            'https://server.the-moment-schema.site/signupInfo';
                        fetch(url, {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email: email,
                                pw: pw,
                                name: name,
                                number: number,
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
            }
        } else {
            alert('잘못 입력된 값이 있습니다');
        }
    } catch (e) {
        console.log(e);
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
const checkEmail = (email) => {
    if (!emailCheck.test(email)) {
        alert('올바른 형식의 이메일을 적어주세요');
        return false;
    }
    return true;
};

submitBTN.addEventListener('click', handleClick);

export { checkPW, checkEmail };
