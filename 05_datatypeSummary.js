//Primitive

// 7 types : String , Number , Boolearn, null , Symbol
// BigInt

// Reference (Non primitive)

// Array, Objects, Functions 

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherID = Symbol('123')
// console.log(id===anotherID);
// console.log(anotherID);
// console.log(true=="true");

const heros = ["shaktiman","naagraj","doga"];
   let myObj = {
    name : "ankit",
    age : 22,
}


const myFunction = function(){

    console.log("hello");
    
}

// console.log(typeof big);


// *****************************************************
// Stack (primitive), Heap (Non-Primitive)

let myYoutube = "ankitnayek"
let anothername = myYoutube;
anothername = "nayek"
// console.log(anothername);
// console.log(myYoutube);


// heap 
let userOne = {
    email : "ankit@com",
    upi : "2525@yybl"
}
let userTwo = userOne
userTwo.email = "nayek@009"
console.log(userOne.email);
console.log(userTwo.email);






