function my_fun(){
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("a");
    console.log("a");
}
// my_fun()
 

function mul(n1,n2)
{
    // console.log(n1*n2);
   
    // let ans =n1*n2
    // return ans
    return n1*n2
} 
const result = mul(5,6)
// console.log(result);


function loginUser(username) {
    if(undefined===username)
    {
        console.log("sorry");
        return
        
    }
    return `${username} just logged in`
    
}
// console.log(loginUser());


// function calculate_cart_price(v1,v2,...n1) // rest op
// {
//     return n1
// }
//console.log(calculate_cart_price(20,40,60,70));
const user = {
    username : "ankit",
    price:299
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"shoes",
    price:499
})

const my_array = [200,1,1,2,3]

function return_value(getArray) {
    return getArray
}
console.log(return_value(my_array));



