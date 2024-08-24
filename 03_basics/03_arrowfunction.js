const user = {
    username:"ankit",
    price:555,
    welcomeMessage:function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sonali"
// user.welcomeMessage()

// console.log(this);
// function two() {
//     let username = "hitesh"
//     console.log(this);
    
// }
// two()
// const chai =  (params) => {
//     let username = "ankit"
//     console.log(this.username);
    
// }
// chai()


// const addTwo = (n1,n2) => {
//     return n1*n2
// }


const addTwo = (n1, n2) => (n1 * n2)// Corrected to add n1 and n2
// console.log(addTwo(7, 6)); 


// const add_two = (n1,n2) => ({username:"ankit"})
// console.log(add_two());

//  const my_array = [11,2,1,3,4]
//  my_array,array.forEach(element => {
    
//  });


