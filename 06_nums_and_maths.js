const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 123.4587
// console.log(anotherNumber.toPrecision(4));

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.4)); //
// console.log(Math.ceil(4.3)); //5
// console.log(Math.floor(4.3)); //4
// console.log(Math.min(4, 2, 6, 7));
// console.log(Math.max(4, 2, 6, 7));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);