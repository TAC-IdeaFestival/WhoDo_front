onload = () => {
    const gradeValue = localStorage.getItem('gradeValue');
    const title = localStorage.getItem('title');
    const matters = localStorage.getItem('matters');
    const YMD = localStorage.getItem('YMD');
    if (gradeValue != null && title != null && matters != null && YMD != null) {
        const contents = document.querySelector('.contents');
        const content = document.createElement('div');
        content.className = 'content';
        const gradeBox = document.createElement('div');
        gradeBox.className = 'gradeBox';
        const textBox = document.createElement('h1');
        textBox.className = 'textBox';
        const isCur = document.createElement('div');
        isCur.className = 'isCur';
        const dateBox = document.createElement('div');
        dateBox.className = 'dateBox';
        contents.appendChild(content);
        content.appendChild(gradeBox);
        content.appendChild(textBox);
        content.appendChild(isCur);
        content.appendChild(dateBox);
        let cnt = '';
        for (let i = 0; i < gradeValue.length; i++) cnt += gradeValue[i];
        gradeBox.innerText = `${cnt}학년`;
        switch (gradeValue.length) {
            case 1: {
                switch (gradeValue[0]) {
                    case '3':
                        gradeBox.style.backgroundColor = '#F3D6D4';
                        break;
                    case '2':
                        gradeBox.style.backgroundColor = '#CDD7EB';
                        break;
                    case '1':
                        gradeBox.style.backgroundColor = '#F3F4BF';
                        break;
                }
                break;
            }
            case (2, 3, 4, 5): {
                gradeBox.style.backgroundColor = '#B9DDBD';
            }
        }
        textBox.innerText = title;
        const DATE = new Date();
        const date = DATE.getDate();
        const month = DATE.getMonth();
        const year = DATE.getFullYear();
        const cur = `${`${`${year}`[2]}${`${year}`[3]}`}${month}${date}`;
        if (parseInt(cur) <= parseInt(YMD)) {
            isCur.style.backgroundColor = '#C5D4E9';
            isCur.innerText = '진행중';
        } else {
            isCur.style.backgroundColor = '#D9D9D9';
            isCur.innerText = '기한마감';
        }
        const newDate =
            '20' +
            YMD[0] +
            YMD[1] +
            '/' +
            YMD[2] +
            YMD[3] +
            '/' +
            YMD[4] +
            YMD[5];
        dateBox.innerText = newDate;
        localStorage.setItem('newDate', newDate);
        content.style.cursor = 'pointer';
        content.addEventListener(
            'click',
            () => (location.href = '../pages/ContentDetail.html')
        );
    }
};
