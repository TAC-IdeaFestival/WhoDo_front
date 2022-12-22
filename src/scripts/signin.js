import { checkEmail, checkPW } from './signup.js';

const emailInput = document.querySelector('.email');
const pwInput = document.querySelector('.pw');
const submitBTN = document.querySelector('.submitBTN');

let userEmail;

const handleClick = () => {
    const email = emailInput.value;
    const pw = pwInput.value;

    if (email != '' && pw != '') {
        if (checkPW(pw) && checkEmail(email)) {
            let url = 'https://server.the-moment-schema.site/signupInfo';
            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    pw: pw,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    console.log(json);
                    useremail = email;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};

submitBTN.addEventListener('click', handleClick);
