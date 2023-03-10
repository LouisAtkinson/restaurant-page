import Pizzas from './pizzas.jpg';

export default function loadHome() {
    const container = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = 'La Cucina';
    container.appendChild(heading);

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    container.appendChild(tabs);

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('buttons');
    homeBtn.classList.add('homeBtn');
    homeBtn.style.borderBottom = 'solid 2px white';
    homeBtn.innerText = 'Home';
    tabs.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('buttons');
    menuBtn.classList.add('menuBtn');
    menuBtn.innerText = 'Menu';
    tabs.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('buttons');
    contactBtn.classList.add('contactBtn');
    contactBtn.innerText = 'Contact';
    tabs.appendChild(contactBtn);

    const mainImg = new Image();
    mainImg.src = Pizzas;
    mainImg.classList.add('mainImg');
    container.appendChild(mainImg);

    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    slogan.innerText = 'Serving the best Italian food in Sheffield since 1998';
    container.appendChild(slogan);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerText = 'Copyright © 2023 Louis Atkinson';
    container.appendChild(footer);
}