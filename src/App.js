const boardContainer = document.querySelector('.main-board-container');
const buttonCpu = document.querySelector('.button--cpu');
const restartBtn = document.querySelectorAll('.restart-btn');  

const Xcontainer = document.querySelector('.x-container'),
      Ocontainer = document.querySelector('.o-container'),
      Xturn = document.querySelector('.x-turn'),
      Oturn = document.querySelector('.o-turn');
      
const Xmark = document.querySelector('.x-mark'),
      Omark = document.querySelector('.o-mark'),
      boardMark = document.querySelectorAll('div .grid__board-mark'),
      showX = document.querySelector('show-x');


buttonCpu.addEventListener('click', onButtoncpuClick);

function onButtoncpuClick() {
    boardContainer.classList.remove('board__container-hidden');
}

restartBtn.forEach(e => {
    e.addEventListener('click', cleanGameBoard);
})

function cleanGameBoard () {

    boardMark.forEach((e)=>{
        e.classList.remove('show-x');
        e.classList.remove('show-o');
        e.style.pointerEvents = 'initial';
    })
    
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


boardMark.forEach(e => {
    e.setAttribute('onclick', 'clickedBoardMark(this)');

})


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






