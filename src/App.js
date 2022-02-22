const boardContainer = document.querySelector('.main-board-container');
const buttonCpu = document.querySelector('.button--cpu');

const marckPicked = document.querySelectorAll('.start__icon-container'),
      Xcontainer = document.querySelector('.x-container'),
      Ocontainer = document.querySelector('.o-container'),
      Xturn = document.querySelector('.x-turn'),
      Oturn = document.querySelector('.o-turn');  



const Xmark = document.querySelector('.x-mark');
const Omark = document.querySelector('.o-mark');
const boardMark = document.querySelectorAll('div .grid__board-mark');


buttonCpu.addEventListener('click', onButtoncpuClick);
function onButtoncpuClick() {
    boardContainer.classList.remove('board__container-hidden');
}

Xcontainer.addEventListener('click', function(){
    if(Xcontainer.classList.toggle('active-mark')){
        Ocontainer.classList.remove('active-mark');
        Xturn.style.display = 'inline-block'
    }else {
        Xcontainer.classList.add('active-mark')
        Xturn.style.display = 'inline-block'
    }
});

Ocontainer.addEventListener('click', function () {
    if(Ocontainer.classList.toggle('active-mark')){
        Xcontainer.classList.remove('active-mark');
        Xturn.style.display = 'inline-block'
    }else {
        Ocontainer.classList.add('active-mark')
    }
})


boardMark.forEach(boxMark => {
    boxMark.setAttribute('onclick', 'clickedBoardMark(this)');
})

// function clickedBoardMark (e) {
//     e.currentTarget.classList.remove('hidden-x');
// }

// for (let i = 0; i< boardMark.length; i++) {
//     boardMark[i].setAttribute('onclick', 'clickedBoardMark(this)');   
// }


function clickedBoardMark (element) {
    if(Xturn.style.display === 'inline-block') {
        element.classList.add('show-x');
        Oturn.style.display = 'inline-block'
        Xturn.style.display = 'none'
    }else if(Oturn.style.display === 'inline-block') {
        element.classList.add('show-o');
        Xturn.style.display = 'inline-block';
        Oturn.style.display = 'none'
    }
    element.style.pointerEvents = 'none';
}




