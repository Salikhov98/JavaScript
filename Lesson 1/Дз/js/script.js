var BudgetForMonth = prompt("Вам бюджет на месяц?");
var ScoreName = prompt("Название вашего магазина?");
var month = 30;

var mainList = {
	BudgetForMonth,
	ScoreName,
	ShopGoods: [],
	employers: {},
	open: true
}

for (var i = 0; i < 3; i++){
	mainList.ShopGoods[i] = prompt('Какой тип товаров будем продовать?');
}

var BudgetForDay = mainList.BudgetForMonth / month;

alert(BudgetForDay.toFixed(0));

console.log(mainList.ShopGoods);