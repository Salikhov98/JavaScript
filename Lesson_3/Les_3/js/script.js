/*let num = 20;

function showFirstMessage(text) {
	alert(text);
	num = 10;
}

showFirstMessage("Hello world!");
console.log(num);*/

/*function calc(a,b){
	return a + b
}

console.log(calc(4,4));
console.log(calc(4,13));*/



/*let calc = function(a,b){
	return a+b
}

console.log(calc(4,4));
console.log(calc(4,13));*/



/*let calc = (a,b) => a+b

console.log(calc(4,5));
console.log(calc(4,15));*/


/*
let str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());*/

/*let str = "12.2";
console.log(Math.round(str));*/


/*let str = "12.2px";
console.log(parseInt(str));
console.log(parseFloat(str));*/


let budgetForMonth, 
	scoreName, 
	month, 
	time,
	price

function start() {
	budgetForMonth = prompt("Вам бюджет на месяц?");

	while (isNaN(budgetForMonth) || budgetForMonth == "" || budgetForMonth == null) {
		budgetForMonth = prompt("Вам бюджет на месяц?");
	}
	scoreName = prompt("Название вашего магазина?").toUpperCase();
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
		discount: false
	}
function chooseGoods(){
		for (let i = 0; i < 3; i++){
		let a = prompt('Какой тип товаров будем продовать?');

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			console.log('ложь!');
		}
	}
}
chooseGoods();


/*let i = 0;
while(i < 3){
	var a = prompt('Какой тип товаров будем продовать?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('ложь!');
	}
	i++;
}*/

/*var i = 0;
do{
	var a = prompt('Какой тип товаров будем продовать?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Ложь');
	}
	i++;
} while (i < 3);*/


function workTime(time){
	if (time < 0) {
	console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24ч!');
	}
}
workTime(18);



let budgetForDay = mainList.budgetForMonth / month;
alert(budgetForDay.toFixed(0));
console.log(mainList);


