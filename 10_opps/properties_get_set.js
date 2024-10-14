function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperties(this, {
        email: {
            get: function () {
                return this._email.toUpperCase();
            },
            set: function (value) {
                this._email = value;
            }
        }
    });
}

const ankit = new User('sonali@123','000')
console.log(ankit._email);
console.log(ankit.email); 

// ankit.email = 'newemail@example.com';
// console.log(ankit._email); // Outputs: newemail@example.com
// console.log(ankit.email); 