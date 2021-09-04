import './style.css';
import './robin-stickel-tzl1UCXg5Es-unsplash.jpg';
import './KaiseiHarunoUmi-Bold.ttf';
import './KaiseiHarunoUmi-Regular.ttf';
import './KaiseiHarunoUmi-Medium.ttf';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';

window.addEventListener('load', home);

const homeLi = document.querySelector('#home');
const menuLi = document.querySelector('#menu');
const aboutLi = document.querySelector('#about');
const contactLi = document.querySelector('#contact');

homeLi.addEventListener('click', home);
menuLi.addEventListener('click', menu);
aboutLi.addEventListener('click', about);
contactLi.addEventListener('click', contact);