let box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circle = document.getElementsByClassName('circle'),
	heart = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart');


console.log(box);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);
console.log(oneHeart);

box.style.backgroundColor = 'blue'; // здесь мы поменяли цвет бокса на странице
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

let div = document.createElement('div');
let text = document.createTextNode('Тут был я'); 

div.classList.add('black');

document.body.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
document.body.replaceChild(heart[0], circle[0]);

div.innerHTML = "Hello </br> world";
div.textContent = "Hello </br> world"