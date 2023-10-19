const name = "mallanath"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("hitesh-hc-mom")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(0))
console.log(gameName.indexOf("o"))

const newString =  gameName.substring(0, 9)

console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  mallu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mallanathmise.com/mallanath%20mise"
 
console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));