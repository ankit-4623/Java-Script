const user = {
    _email :'ankit@nayek',
    _password:'123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// const ankit = new user('sonali@123','000')
// console.log(ankit.email)

const tea = Object.create(user)
console.log(tea.email);
