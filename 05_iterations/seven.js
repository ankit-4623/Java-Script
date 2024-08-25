//array reduce

const arr = [1,2,3,4]
const init = 1
// const sum = arr.reduce(
//     (a,b) => a*b,init
// )
// console.log(sum);

// const sum = arr.reduce(function(a,b){
//     return a*b
// },1)


const sum  = arr.reduce((a,b)=>a+b,1)
//console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
