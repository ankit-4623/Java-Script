// singleton
//Object.create
// object literals


const mySym = Symbol("key1")

const JSUser = {
    "full name" : "sonali",
    [mySym] :"mykey1",
    age : 20,
    email : "ankitv@ss,com",
    isLoggedIn:false
    
}
//console.log(JSUser.age);// simple approch
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(typeof JSUser[mySym]);

//JSUser.email = "ankitnayek@ii"
//bject.freeze(JSUser)
//JSUser.email = "nayeka@pp"
// console.log(JSUser);

JSUser.greeting = function(){
    console.log(`hello js user,${this["full name"]}`);
    
}
console.log(JSUser.greeting());


 