const boardContainer = document.querySelector('.main-board-container');
const buttonCpu = document.querySelector('.button--cpu');

const Xicon = document.createElement('img');
Xicon.src = '../public/assets/icon-x.svg';
const boardMark = document.querySelectorAll('.grid__board-mark');
console.log(boardMark)


buttonCpu.addEventListener('click', onButtoncpuClick);

boardMark.addEventListener('click', onBoardMarkClick);


function onButtoncpuClick() {
    boardContainer.classList.remove('board__container-hidden');
}




