const account_id = 12249
let accountEmail = "ankit@google.com"
var accountPassword = "1234"
accountCity = "Noley"

// account_id = 3   Not allowed

accountEmail = "ak@odoodo.com"
accountPassword = "23145"
accountCity = "Kolkata"
console.log(account_id);
let ankit

/*  
Prefer not to use var
-> Because of isssue in block scope and functional scope
*/
console.table([account_id,accountEmail,accountPassword,accountCity,ankit])