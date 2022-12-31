const answer = localStorage.getItem('answer');
if (answer != null) {
    const voted = document.createElement('div');
    voted.className = 'g-1';
    voted.classList.add('styled');
    if (answer[9] == 'y') {
        const leftBox = document.querySelector('.left-Box');
        leftBox.appendChild(voted);
    }
    if (answer[9] == 'n') {
        const leftBox = document.querySelector('.right-Box');
        leftBox.appendChild(voted);
    }
    voted.innerText = `${answer[0]}${answer[1]}${answer[2]}${answer[3]}${answer[5]}${answer[6]}${answer[7]}`;
}
