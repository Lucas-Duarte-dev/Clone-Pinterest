const grid = document.querySelectorAll('.grid .columns');
const text = document.querySelectorAll('.heading .wrapper .text');
const arrowDown = document.querySelector('.arrow img');
const register = document.querySelector('#register');
const arrowUp = document.querySelector('.arrow-container img');

function addClass(element, currentTime) {
    let gridIndex = -1;
    setInterval(() => {
        gridIndex++
        gridIndex < element.length ? element[gridIndex].classList.add('active') : gridIndex = -1
    }, currentTime);
}

function removeClass(item, currentTime) {
    setInterval(() => {
        item.forEach(element => {
            element.classList.remove('active');
        })
    }, currentTime);
}

window.addEventListener('load', () => {
    addClass(grid, 200);
    removeClass(grid, 4000);
    addClass(text, 4000);
    removeClass(text, 5000);
})

arrowDown.addEventListener('click', () => {
    register.classList.add('show');
})

arrowUp.addEventListener('click', () => {
    register.classList.remove('show');
})