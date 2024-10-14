class user {
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`user name is ${this.username}`);
        
    }
}
class Teacher extends user{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password;
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const ankit = new Teacher('ankit','ankit@gmail.com','123')
ankit.addcourse()

