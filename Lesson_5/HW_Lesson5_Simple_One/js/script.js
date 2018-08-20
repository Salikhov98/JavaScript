document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

 let menuItem = document.getElementsByClassName('menu-item');
 let menu = document.getElementsByClassName('menu')[0];
 menu.insertBefore(menuItem[2], menuItem[1]);

/* Add 5й пункт */
let li = document.createElement('li');
let ul = document.getElementsByTagName('ul')[0];
	li.classList.add("menu-item");
	li.innerHTML = 'Пятый пункт';
	ul.appendChild(li);
/* Add 5й пункт */

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

let column = document.getElementsByClassName('column')[1];
let adv = document.querySelector('.adv');
column.removeChild(adv);

let otziv = prompt("Напишите ваше отношение к технике Apple: ", "");
let promptOtziv = document.getElementById('prompt');
promptOtziv.textContent = otziv;	

