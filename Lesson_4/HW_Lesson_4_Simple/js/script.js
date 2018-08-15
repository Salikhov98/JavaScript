let budgetForMonth, 
	scoreName, 
	month, 
	time,
	price = 100;

function start() {
	budgetForMonth = prompt("Ваш бюджет на месяц?", '');

	while (isNaN(budgetForMonth) || budgetForMonth == "" || budgetForMonth == null) {
		budgetForMonth = prompt("Ваш бюджет на месяц?", '');
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
				if ( (typeof(a)) === 'string' && a != null && a != '' && a.length < 50 ) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				} else {
					console.log('ложь!');
					i--; 
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
				while ( (typeof(empInput)) !== 'string' || empInput == null || empInput == ''){
					empInput = prompt('Введите имя сотрудника: ', '');
				}
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
		},
		buyShop: function buyShop() {
			mainList.shopGoods.forEach(function(item, i, arr){
				console.log(i+1 + ': ' + item);
			});
		},
		usShop: function usShop() {
			console.log('Наш магазин включает в себя:');
			for ( let key in mainList ) {
				console.log(key);
			}
		}
	}

mainList.chooseGoods();
mainList.workTime(time);
mainList.forDay();
mainList.discountSystem();
mainList.hireEmployers();
mainList.chooseShopItems();
mainList.buyShop();
mainList.usShop();
console.log(mainList);