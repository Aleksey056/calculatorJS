let string = "X * VI"


function calculator () {

	let arr = string.split(" ")
	if (arr.length > 3) {
		throw 'Ошибка';
	} else {
	let a = arr[0];
	let operator = (arr[1]);
	let b = arr[2];


	if ( parseInt(a) == Number(arr[0]) && parseInt(b) == Number(arr[2])) {
		oCalculator()
		return oCalculator();
	} else if ( true == !Number(arr[0]) && true == !Number(arr[2])) {
	  	rimCalculator()
		return rimCalculator();
	} else {
		throw 'Ошибка';
	} 
	

function oCalculator() { // Функция обычного калькулятора 
	if ( a > 10 || a == 0 || b > 10 || b == 0) {
		throw 'Ошибка';		
		} else {
			let sum1=" ";			
			switch (operator) { // Обычный калькулятор целых чисел
				case "+" : sum1 = parseInt(a) + parseInt(b); break;
				case "-" : sum1 = parseInt(a) - parseInt(b); break;
				case "*" : sum1 = parseInt(a) * parseInt(b); break;
				case "/" : sum1 = parseInt(a) / parseInt(b); break;
				default : throw 'Ошибка';
				}
			sum1=Math.floor(sum1)
			sum1= String(sum1)
			return sum1;
			}
}

function rimSign() {
	// console.log(arguments);
	let sign=" ";
	switch (arguments[0]) { // Преобразование римских цифр в обычные для переменной a
		case "I":    sign = 1; break;
		case "II":   sign = 2; break;
		case "III":  sign = 3; break;
		case "IV":   sign = 4; break;
		case "V":    sign = 5; break;
		case "VI":   sign = 6; break;
		case "VII":  sign = 7; break;
		case "VIII": sign = 8; break;
		case "IX":   sign = 9; break;
		case "X":    sign = 10; break;
		default : throw 'Ошибка';
		};
	
		return sign;
		
}

function rimCalculator() { // Функция римского калькулятора

	let sum2=" ";
	switch (operator) { // Rалькулятор римских цифр
		case "+" : sum2 = rimSign(a) + rimSign(b); break;
		case "-" : sum2 = rimSign(a) - rimSign(b);  break;
		case "*" : sum2 = rimSign(a) * rimSign(b); break;
		case "/" : sum2 = rimSign(a) / rimSign(b); break;
		default : throw 'Ошибка';
		}
		sum2=Math.floor(sum2)
		
	if (sum2 < 1) {
		let rimResult = "";
		return rimResult;
	} else {
		return romanConvertor(sum2);

function romanConvertor () {
	
	const romes = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };
	let result = '';
		for (let key in romes) {
			while (romes[key] <= sum2) {
			result += key;
			sum2 = sum2 - romes[key];
			}
		}
		return result;
		
}

}}}}
calculator()

console.log('Результат после выполнения "function calculator":', calculator())
console.log(typeof calculator())

