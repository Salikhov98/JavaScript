var budgetForMonth = prompt("Вам бюджет на месяц?");
var scoreName = prompt("Название вашего магазина?");
var month = 30;

var mainList = {
	sudgetForMonth,
	scoreName,
	shopGoods: [],
	employers: {},
	open: true
}

for (var i = 0; i < 3; i++){
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продовать?');
}

var BudgetForDay = mainList.budgetForMonth / month;

alert(budgetForDay.toFixed(0));

console.log(mainList.shopGoods);