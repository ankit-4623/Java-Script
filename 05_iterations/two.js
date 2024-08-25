const  myNumbers = [1,2,3,4,5,6]

// let other = myNumbers.forEach((num)=> {
//     console.log(num+10);
    
// })
// console.log(other);

const newNums = myNumbers
.map((item) => item*10)
.map((item) => item+10)
console.log(newNums);
