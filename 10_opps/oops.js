const user = {
    username : 'ankit',
    logincount:6,
    signedin:true,
    geruserdetails : function () {
        //console.log("got user details");
        console.log(`user name is ${this.username}`);
        
        console.log(this);
        
    }


}
// console.log(user.username);
// console.log(user.geruserdetails());


// const promise_one = new Promise()
// const date = new Date()
function User(username, logincount, islogedin) {
    this.username = username;
    this.logincount = logincount;
    this.islogedin = islogedin;
    this.greeting = function () {
        console.log(`welcome ${this.username}`);
        
    }
    return this
} 

const user_one = new User("ankit", 10, true);
const user_two = new User("sonali", 12, true);
console.log(user_two);
console.log(user_one);

// instanceof



