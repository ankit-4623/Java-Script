class user{
    constructor(username){
       this.username = username; 
    }
static logMe(){
    console.log(`username:${this.username}`);
    
}

createID(){
    return `123`
}

}

const ankit = new user("ankit nayek")
ankit.logMe()