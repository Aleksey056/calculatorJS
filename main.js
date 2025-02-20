let string = "II * IV";

console.log("TEST: Полученная строка:",string);
// let sum;
// let arr = string.match(/\.\d+|\d+\.?\d*|./g)
let arr = string.split(" ") //|| string.split("+"); //|| string.split("-") || string.split("*")  || string.split("/")  || string.split("");
let a = arr[0];
let operator = (arr[1]);
let b = arr[2];

console.log("TEST: Полученный массив:",arr);
console.log("-------------------------------------");
// a = Number(arr[0])
// console.log(a)
// b = Number(arr[2])
// console.log(b)

if ( parseInt(a) == Number(arr[0]) && parseInt(b) == Number(arr[2])) {
	oCalculator();
} else if ( true == !Number(arr[0]) && true == !Number(arr[2])) {
  	rimCalculator();
} else {
	console.log("Ошибка, введите данные правильно");
}


function oCalculator() { // Функция обычного калькулятора
	if (a == 0 || b == 0) {
		console.log('Ошибка: A или B не может быть "0"!');
		return;
	} else {
		switch (operator) { // Обычный калькулятор целых чисел
			case "+" : sum1 = parseInt(a) + parseInt(b); break;
			case "-" : sum1 = parseInt(a) - parseInt(b); break;
			case "*" : sum1 = parseInt(a) * parseInt(b); break;
			case "/" : sum1 = parseInt(a) / parseInt(b); break;
			default : console.log("Ошибка, неверный знак операции для вычисления!");
			return;}
		}
	console.log("Запустился обычный калькулятор! Результат:",parseInt(sum1));
	}

function rimCalculator() { // Функция римского калькулятора
	switch (a) { // Преобразование римских цифр в обычные для переменной a
		case "I":    rimSignA = 1; break;
		case "II":   rimSignA = 2; break;
		case "III":  rimSignA = 3; break;
		case "IV":   rimSignA = 4; break;
		case "V":    rimSignA = 5; break;
		case "VI":   rimSignA = 6; break;
		case "VII":  rimSignA = 7; break;
		case "VIII": rimSignA = 8; break;
		case "IX":   rimSignA = 9; break;
		case "X":    rimSignA = 10; break;
		default : console.log("Ошибка, укажите правильный первый(a) римский знак"); return;
		};
	switch (b) { // Преобразование римских цифр в обычные для переменной b
		case "I":   rimSignB= 1; break;
		case "II":  rimSignB = 2; break;
		case "III": rimSignB = 3; break;
		case "IV":  rimSignB = 4; break;
		case "V":   rimSignB = 5; break;
		case "VI":  rimSignB = 6; break;
		case "VII": rimSignB = 7; break;
		case "VIII":rimSignB = 8; break;
		case "IX":  rimSignB = 9; break;
		case "X":   rimSignB = 10; break;
		default : console.log("Ошибка, укажите правильный второй(b) римский знак"); return;
		};
	switch (operator) { // Rалькулятор римских цифр
		case "+" : sum2 = rimSignA + rimSignB; break;
		case "-" : sum2 = rimSignA - rimSignB;  break;
		case "*" : sum2 = rimSignA * rimSignB; break;
		case "/" : sum2 = rimSignA / rimSignB; break;
		default : console.log(	"Ошибка, неверный знак операции для вычисления!"); return;
		}
	if (sum2 < 1) {
		rimResult = '"';
	} else {
	switch (sum2) { // Преобразование обычных цифр в римские
		case 1		:rimResult = "I";break;
		case 2		:rimResult = "II";break;
		case 3		:rimResult = "III";break;
		case 4		:rimResult = "IV";break;
		case 5		:rimResult = "V";break;
		case 6		:rimResult = "VI";break;
		case 7		:rimResult = "VII";break;
		case 8		:rimResult = "VIII";break;
		case 9		:rimResult = "IX";break;
		case 10		:rimResult = "X";break;
		case 11		:rimResult = "XI";break;
		case 12		:rimResult = "XII";break;
		case 13		:rimResult = "XIII";break;
		case 14		:rimResult = "XIV";break;
		case 15		:rimResult = "XV";break;
		case 16		:rimResult = "XVI";break;
		case 17		:rimResult = "XVII";break;
		case 18		:rimResult = "XVIII";break;
		case 19		:rimResult = "XIX";break;
		case 20		:rimResult = "XX";break;
		case 21		:rimResult = "XXI";break;
		case 22		:rimResult = "XXII";break;
		case 23		:rimResult = "XXIII";break;
		case 24		:rimResult = "XXIV";break;
		case 25		:rimResult = "XXV";break;
		case 26		:rimResult = "XXVI";break;
		case 27		:rimResult = "XXVII";break;
		case 28		:rimResult = "XXVIII";break;
		case 29		:rimResult = "XXIX";break;
		case 30		:rimResult = "XXX";break;
		case 31		:rimResult = "XXXI";break;
		case 32		:rimResult = "XXXII";break;
		case 33		:rimResult = "XXXIII";break;
		case 34		:rimResult = "XXXIV";break;
		case 35		:rimResult = "XXXV";break;
		case 36		:rimResult = "XXXVI";break;
		case 37		:rimResult = "XXXVII";break;
		case 38		:rimResult = "XXXVIII";break;
		case 39		:rimResult = "XXXIX";break;
		case 40		:rimResult = "XL";break;
		case 41		:rimResult = "XLI";break;
		case 42		:rimResult = "XLII";break;
		case 43		:rimResult = "XLIII";break;
		case 44		:rimResult = "XLIV";break;
		case 45		:rimResult = "XLV";break;
		case 46		:rimResult = "XLVI";break;
		case 47		:rimResult = "XLVII";break;
		case 48		:rimResult = "XLVIII";break;
		case 49		:rimResult = "XLIX";break;
		case 50		:rimResult = "L";break;
		case 51		:rimResult = "LI";break;
		case 52		:rimResult = "LII";break;
		case 53		:rimResult = "LIII";break;
		case 54		:rimResult = "LIV";break;
		case 55		:rimResult = "LV";break;
		case 56		:rimResult = "LVI";break;
		case 57		:rimResult = "LVII";break;
		case 58		:rimResult = "LVIII";break;
		case 59		:rimResult = "LIX";break;
		case 60		:rimResult = "LX";break;
		case 61		:rimResult = "LXI";break;
		case 62		:rimResult = "LXII";break;
		case 63		:rimResult = "LXIII";break;
		case 64		:rimResult = "LXIV";break;
		case 65		:rimResult = "LXV";break;
		case 66		:rimResult = "LXVI";break;
		case 67		:rimResult = "LXVII";break;
		case 68		:rimResult = "LXVIII";break;
		case 69		:rimResult = "LXIX";break;
		case 70		:rimResult = "LXX";break;
		case 71		:rimResult = "LXXI";break;
		case 72		:rimResult = "LXXII";break;
		case 73		:rimResult = "LXXIII";break;
		case 74		:rimResult = "LXXIV";break;
		case 75		:rimResult = "LXXV";break;
		case 76		:rimResult = "LXXVI";break;
		case 77		:rimResult = "LXXVII";break;
		case 78		:rimResult = "LXXVIII";break;
		case 79		:rimResult = "LXXIX";break;
		case 80		:rimResult = "LXXX";break;
		case 81		:rimResult = "LXXXI";break;
		case 82		:rimResult = "LXXXII";break;
		case 83		:rimResult = "LXXXIII";break;
		case 84		:rimResult = "LXXXIV";break;
		case 85		:rimResult = "LXXXV";break;
		case 86		:rimResult = "LXXXVI";break;
		case 87		:rimResult = "LXXXVII";break;
		case 88		:rimResult = "LXXXVIII";break;
		case 89		:rimResult = "LXXXIX";break;
		case 90		:rimResult = "XC";break;
		case 91		:rimResult = "XCI";break;
		case 92		:rimResult = "XCII";break;
		case 93		:rimResult = "XCIII";break;
		case 94		:rimResult = "XCIV";break;
		case 95		:rimResult = "XCV";break;
		case 96		:rimResult = "XCVI";break;
		case 97		:rimResult = "XCVII";break;
		case 98		:rimResult = "XCVIII";break;
		case 99		:rimResult = "XCIX";break;
		case 100		:rimResult = "C";break;
		default : console.log("Ошибка, укажите правильный второй(b) римский знак");return;
		};
	}
console.log("Запустился римский калькулятор! Результат:",rimResult);
}
