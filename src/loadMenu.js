export default function loadMenu() {
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
    homeBtn.innerText = 'Home';
    tabs.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('buttons');
    menuBtn.classList.add('menuBtn');
    menuBtn.style.borderBottom = 'solid 2px white';
    menuBtn.innerText = 'Menu';
    tabs.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('buttons');
    contactBtn.classList.add('contactBtn');
    contactBtn.innerText = 'Contact';
    tabs.appendChild(contactBtn);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    container.appendChild(menu);

    const appetisers = document.createElement('h3');
    appetisers.classList.add('menuhead');
    appetisers.innerText = 'Appetisers';
    menu.appendChild(appetisers);

    const starterList = document.createElement('div');
    starterList.classList.add('menuitems');
    starterList.innerHTML = 'Garlic pizza bread £6.50 <br> Bread with black olive tepenade £5.50 <br> Burrata bruschetta £6'
    menu.appendChild(starterList);

    const entrees = document.createElement('h3');
    entrees.classList.add('menuhead');
    entrees.innerText = 'Entrées';
    menu.appendChild(entrees);

    const entreeList = document.createElement('div');
    entreeList.classList.add('menuitems');
    entreeList.innerHTML = 'Tagliatelle al ragu £12.50 <br> Bucatini carbonara £11.50 <br> <br> Margherita pizza £9.50 <br> Artichoke and caper pizza £11 <br> Ham and pepperoni pizza £12'
    menu.appendChild(entreeList);

    const desserts = document.createElement('h3');
    desserts.classList.add('menuhead');
    desserts.innerText = 'Desserts';
    menu.appendChild(desserts);

    const dessertList = document.createElement('div');
    dessertList.classList.add('menuitems');
    dessertList.innerHTML = 'Dark chocolate mousse £4.50 <br> Chocolate cake and vanilla ice cream £6'
    menu.appendChild(dessertList);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerText = 'Copyright © 2023 Louis Atkinson';
    container.appendChild(footer);
}