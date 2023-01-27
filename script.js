'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLink = document.querySelectorAll('.nav__link');
const navLinkS = document.querySelector('.nav__links');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page navigation
// if we use this way it will make the page heavy, imagining if we have 100 links
/*
navLink.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */

navLinkS.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Button Scrooling
btnScrollTo.addEventListener('click', function (e) {
  //const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  /* OLD WAY OF DOING THE SMOOTH SCROLLING
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  }); */

  // NEW WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
//console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
//console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons);

//console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent ='We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// //header.prepend(message);
// header.append(message);
// //header.append(message.cloneNode(true));

// //header.before(message);
// //header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

//Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// //console.log(message.style.backgroundColor);

// //console.log(getComputedStyle(message).color);
// //console.log(getComputedStyle(message).height);

// message.style.height =
//   // Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attibutes
const logo = document.querySelector('.nav__logo');
//console.log(logo.alt);
//console.log(logo.src);

logo.setAttribute('company', 'Banklist');

const link = document.querySelector('.nav__link--btn');
//console.log(link.href);
//console.log(link.getAttribute('href'));

// Data attributes
//console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('C', 'm');
logo.classList.remove('C');
logo.classList.toggle('C');
logo.classList.contains('C');

// Don't use like this
logo.className = 'Kelvin';

// 189 - Types of Events
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('AddEventListener: Great, you are reading the heading =D');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
*/
// 193
/*
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
h1.closest('.header').style.background = 'lightgray';
*/

// Tabbed component *194*
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab and content area
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
