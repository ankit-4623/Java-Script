// const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter);

const chai = {
    name:'chips',
    price:20,
    isavailable:true,

    order_chai:function () {
        console.log("nahi chala");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'name',{
//     Writable:false,
//     enumerable:false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        }

    
}

