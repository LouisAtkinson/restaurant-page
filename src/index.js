import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadContact from './loadContact.js';
import './style.css';

loadHome();
buttons();

function buttons() {
    document.querySelector('.homeBtn').addEventListener("click", function() {
        document.querySelector('#content').innerHTML = '';
        loadHome();
        buttons();
    })

    document.querySelector('.menuBtn').addEventListener("click", function() {
        document.querySelector('#content').innerHTML = '';
        loadMenu();
        buttons();
    })

    document.querySelector('.contactBtn').addEventListener("click", function() {
        document.querySelector('#content').innerHTML = '';
        loadContact();
        buttons();
    })
};