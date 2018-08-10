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
	if (number > 10) {
		arr[i] = number;
	} else {
		while( number > 10 ){
			var error = prompt('!!!Введите многозначное число!!!');
			i--
		}
		arr[i] = error;
	}
}
 console.log(arr);
