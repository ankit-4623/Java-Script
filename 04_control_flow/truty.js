const userEmail = " "
if(userEmail){
    console.log("got user email");
    
}
else{
    console.log("don't have");
    
}
/// falsy values 
//false,0,-0,BigInt 0n,"",null,undefined,Nan


//Truty values
// "0",'false'," ",[],{},function(){}


// const emptyObj = {}
// if(Object.keys(emptyObj).length===0)
// {
//     console.log("Object is");
    
// }

// Nullish coalescing Operator (??)

let val1;
// val1 = 5??10
val1 = "null"??52
console.log(val1);








