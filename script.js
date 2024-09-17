// 1
let a = 123;

if (a % 2 === 0) {
	console.log('even');
} else {
	console.log('odd');
}

// 2

let b = 7;
let c = 14;

if (b % c === 0 || c % b === 0) {
	console.log(1);
} else {
	console.log(0);
}

// 3

let angle1 = 30;
let angle2 = 30;
let angle3 = 180 - (angle1 + angle2);
console.log(angle3);

// 4

let num1 = 45;
let num2 = -12;
let num3 = 0;
let num4 = 3;
let num5 = -15;

let average = (num1 + num2 + num3 + num4 + num5) / 5;
console.log(average);

// 5

let n = 24;

if (n % 3 === 0 && n % 7 === 0 && n % 5 === 0) {
	console.log(n + ' is a multiple of 3, 5 and 7.');
} else if (n % 3 === 0 && n % 7 === 0) {
	console.log(n + ' is a multiple of 3 and 7.');
} else if (n % 5 === 0 && n % 7 === 0) {
	console.log(n + ' is a multiple of 5 and 7.');
} else if (n % 3 === 0 && n % 5 === 0) {
	console.log(n + ' is a multiple of 3 and 5.');
} else if (n % 3 === 0) {
	console.log(n + ' is a multiple of 3.');
} else if (n % 5 === 0) {
	console.log(n + ' is a multiple of 5.');
} else if (n % 7 === 0) {
	console.log(n + ' is a multiple of 7.');
} else {
	console.log(n + ' is not a multiple of 3, 5 or 7.');
}
