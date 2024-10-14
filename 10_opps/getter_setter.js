class user {
    constructor(email,password)
    {
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
}
const ankit = new user('ankit@nayek',1235)
console.log(ankit.email);
