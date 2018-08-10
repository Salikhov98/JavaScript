var week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var date = new Date();
for(var i = 0; i < week.length; i++){
	if ( week[i] == week[0] || week[i] == week[6] ) {
		document.write(week[i].bold());
 		document.write('</br>');
	} else if ( date.getDay() == i ){
		document.write(week[i].italics());
		document.write('</br>');
	} else {
		document.write(week[i]);
		document.write('</br>');
	}	 
}

var arr = [];
for (var i = 0; i < 7; i++) {
	var number = prompt('Введите многозначное число');
	if (number.length > 1) {
		arr[i] = number;
	} else {
		i--;
		alert('!!Введите многозначное!!')
	}
}

for (var i = 0; i < 7; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i])
	} else {

	}
}
 console.log(arr);
