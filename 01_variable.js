const accountId = 133424
let accountEmail = "mallanthmise@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState 

// accountId = 2 //not allowed

accountEmail = "hc@gmail.com"
accountPassword = "1323424"
accountCity = "hyderabad"

console.log(accountId);

/*
Prefer not use var
because of issue  in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])