function set_user_name(user) {
    // complex DB calls
    this.user=user
}

function create_user(username,email,password) {
    this.email=email
    this.password=password
   set_user_name.call(this,username)


    
}


const oo = new create_user("ankit","ankit@.com","2123")
console.log(oo);
