// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encrypt_password(){
//         return `${this.password}abc`
//     }
//     cp()
//     {
//         return`${this.username.toUpperCase()}`
//     }
// }

// const ankit = new user('ankit','ankkit@oo','124')
// console.log(ankit.encrypt_password());
// console.log(ankit.cp());


function user(username,email,password) {
       this.username=username;
        this.email=email;
        this.password=password;
}
user.prototype.change_name = function () {
    return`${this.username.toUpperCase()}`
}
const ankit = new user('ankit','ankkit@oo','124')

console.log(ankit.change_name());

