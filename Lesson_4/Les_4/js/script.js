/*
let options = {
	name: 'test',
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: 'black',
	background: 'red'
}

delete options.bool;

for( let key in options.colors) {
	console.log('Свойство ' + key + ' имеет значение ' + options.colors[key]);
}

console.log(Object.keys(options).length);
*/

/*first = [1,2,3,4,5];
first[99] = 99;
console.log(first.length);
first.forEach( function(item, i, arr) {
	console.log(i + ": " + item + "(массив: " + arr + ")")
});*/

/*let first = ["qq", "aaa", 'zzz', 'erwe']
let i = first.join(',');
console.log(i);*/

/*let first = [1, 15, 20, 3];
function sortNumbers(a,b) {
	return a - b;
}
let i = first.sort(sortNumbers)
console.log(i);*/

/*
let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
*/

let budgetForMonth, 
	scoreName, 
	month, 
	time,
	price = 100;

function start() {
	budgetForMonth = prompt("Вам бюджет на месяц?", '');

	while (isNaN(budgetForMonth) || budgetForMonth == "" || budgetForMonth == null) {
		budgetForMonth = prompt("Вам бюджет на месяц?", '');
	}
	scoreName = prompt("Название вашего магазина?", '').toUpperCase();
	month = 30;
	time = 19;
}
start();

	let mainList = {
		budgetForMonth,
		scoreName,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods(){
				for (let i = 0; i < 3; i++){
				let a = prompt('Какой тип товаров будем продовать?', '');

				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} else {
					console.log('ложь!');
				}
			}
		},
		workTime: function workTime(time){
			if (time < 0) {
			console.log('Такого не может быть');
			} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24ч!');
			}
		},
		forDay: function forDay() {
			let budgetForDay = mainList.budgetForMonth / month;
			alert(budgetForDay.toFixed(0));
		},
		discountSystem: function discountSystem(){
			mainList.discount = confirm("Вы желаете получить скидку 20%?");
			if (mainList.discount == true){
				alert('Сумма к оплате со скидкой: ' + (price * 80) / 100);
			} else {
				alert('Вы продолжили покупки без скидок! Сумма к оплате: ' + price);
			}
		},
		hireEmployers: function hireEmployers() {
			for (let i = 1; i <= 4; i++){
				let empInput = prompt('Введите имя сотрудника: ', '');
				mainList.Employers = {
					[i]: empInput
				}
			console.log(mainList.Employers);
			}
		},
		chooseShopItems: function chooseShopItems() {
			let items = prompt('Перечислите через запятую товары', '');
			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt('Запищите еще что-то если пропустили:', ''));
			mainList.shopItems.sort();
		}
	}


console.log(mainList);