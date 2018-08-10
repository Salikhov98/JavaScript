var num = 33721;

var num1 = (num).toString(); 

var factor = num1[0]*num1[1]*num1[2]*num1[3]*num1[4];


console.log(factor);

var degree = Math.pow(factor, 3);

console.log(degree);

var str = String(degree);

alert(str.substr(0,2));
