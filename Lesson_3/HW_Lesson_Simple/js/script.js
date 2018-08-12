let budgetForMonth, 
	scoreName, 
	month, 
	time,
	price = 100;

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

function forDay() {
	let budgetForDay = mainList.budgetForMonth / month;
	alert(budgetForDay.toFixed(0));
}
forDay();

function discountSystem(a){
	mainList.discount = confirm("Вы желаете получить скидку 20%?");
	if (mainList.discount == true){
		alert('Сумма к оплате со скидкой: ' + (price * a) / 100);
	} else {
		alert('Вы продолжили покупки без скидок! Сумма к оплате: ' + price);
	}
}
discountSystem(80);



function hireEmployers() {
	for (let i = 1; i <= 4; i++){
		let empInput = prompt('Введите имя сотрудника: ');
		mainList.Employers = {
			[i]: empInput
		}
	console.log(mainList.Employers);
	}
}
hireEmployers();







console.log(mainList);