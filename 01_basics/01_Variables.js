const account_Id = 144553
let account_Email = "Aahaan@google.com"
var account_password = "12345"
account_city = "Chennai"
let account_state;

// account_Id = 2 // not allowed

account_Email = "ac@ac.com"
account_password = "2123323"
account_city = "Bengaluru"

console.log(account_Id);



/*
Prefer not to use var 
because pf issue in block scope and functional scope

*/

console.table([account_Id,account_Email,account_password,account_city,account_state])
