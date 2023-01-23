export default function loadContact() {
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
    menuBtn.innerText = 'Menu';
    tabs.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('buttons');
    contactBtn.classList.add('contactBtn');
    contactBtn.style.borderBottom = 'solid 2px white';
    contactBtn.innerText = 'Contact';
    tabs.appendChild(contactBtn);

    const contactHead = document.createElement('h2');
    contactHead.innerText = 'Contact us for reservations';
    container.appendChild(contactHead);

    const phone =  document.createElement('div');
    phone.classList.add('contact');
    phone.innerText = 'Telephone: 0114 222 75732';
    container.appendChild(phone);

    const email =  document.createElement('div');
    email.classList.add('contact');
    email.innerText = 'Email: reservations@lacucina.italian.sheffield';
    container.appendChild(email);

    const map = document.createElement('div');
    map.classList.add('map');
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.4651411783323!2d-1.540061423845824!3d53.32660159496907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6cdd3e4a8402f41f!2zNTPCsDE5JzM1LjgiTiAxwrAzMicyMC4zIlc!5e0!3m2!1sen!2suk!4v1674497667520!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    container.appendChild(map);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerText = 'Copyright © 2023 Louis Atkinson';
    container.appendChild(footer);
}