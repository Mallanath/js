// kis thara se data ke memory me store kiya jata hai aur access kia jata vus thara se data ke
// data ke 2 category hai primitve and non-primitve

// * Primitive // primitive are call by value original value is not give from memory just a copy is given

// * 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const someValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userName;

let id = Symbol("123")
let anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 243545858459589475n //bigInt

// * Reference (Non primitive) // ye sabh value wo hai jo memory refernce directly kia jata hia

//* Array, Objects, Functions

const heros = ["shaktiman", "ironman", "thor"]

let myObh = {
    name: "mallanath",
    age: 20
}

const myFunction = function () {
    console.log("hello world");
}

console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  memorys are two types  stack and heap whenever your using stack 
//jabi stack memory use hoti uska matlab apko uska ek copy milta hai and heap me original value milega

// * stack (premitive) , Heap (non-premetive) 

let myYoutubename = "mallanathmise.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "mallanathmise@gmai.com"
console.log(userOne.email)
console.log(userTwo.email)