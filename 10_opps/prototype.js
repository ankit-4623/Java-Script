// let my_name = "ankit          "
// // console.log(my_name.trim().length);
// let my_sona = "sonali           "
// console.log(my_name.trueLength);


let my_heros = ["thor","spiderMan"]
let hero_Power = {
    thor:"hammer",
    spiderMan:"sling",


    getspider_power:function () {
        console.log(`spidy power is ${this.spiderMan} `);
            
    }
}

Object.prototype.ankit = function () {
    console.log(`ankit is present in all objects `);
    
}

// my_heros.ankit()

// inheritance

const teacher = {
    make_video:true,
    
}
const teachsupport = {
    isAvailabel:false,
    
}
const tassupport = {
    make_assignment:'JS assignment',
    fulltime:true,
    __proto__:teachsupport
    
}

// modern 
Object.setPrototypeOf(teachsupport,teacher)

let another_user = "ankit nayek   "
String.prototype.true_length = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
} 

another_user.true_length()
"ankit     ".true_length()