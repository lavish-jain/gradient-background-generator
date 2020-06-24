const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const h3 = document.querySelector('h3');
const body = document.querySelector('body');

color1.value = '#ff0000';
color2.value = '#ffff00';
h3.textContent = `${window.getComputedStyle(document.body, null).getPropertyValue('background-image')};`;

const changeBackgroundColor = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = `${body.style.backgroundImage};`;
};

color1.addEventListener('input', changeBackgroundColor);
color2.addEventListener('input', changeBackgroundColor);