// * Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedData = new Date(2023, 0, 23)
// let myCreatedData = new Date(2023, 0, 23, 5, 3)
// let myCreatedData = new Date("2023-01-14")
let myCreatedData = new Date("01-14-2023")
// console.log(myCreatedData.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedData.getTime());

// console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

// `${newDate.getDate()} and the time ` 

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    minute: "2-digit",
    imeZone:""
}))
