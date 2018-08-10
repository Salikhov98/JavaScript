
var BudgetForMonth = prompt("Вам бюджет на месяц?");
var ScoreName = prompt("Название вашего магазина?");
var month = 30;
let time = 19;

var mainList = {
	BudgetForMonth,
	ScoreName,
	ShopGoods: [],
	employers: {},
	open: false
}

for (var i = 0; i < 3; i++){
	var a = prompt('Какой тип товаров будем продовать?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.ShopGoods[i] = a;
	} else {
		console.log('ложь!');
	}
}

/*let i = 0;
while(i < 3){
	var a = prompt('Какой тип товаров будем продовать?');
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.ShopGoods[i] = a;
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
		mainList.ShopGoods[i] = a;
	} else {
		console.log('Ложь');
	}
	i++;
} while (i < 3);*/


if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
} else if (time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24ч!');
}


var BudgetForDay = mainList.BudgetForMonth / month;
alert(BudgetForDay.toFixed(0));
console.log(mainList);