//const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
// console.log(item);
 
// }) 

function printme(val) {
  console.log(val);
     
}
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        languageName:"javascript",
        filename:"js"
    },

    {
        languageName:"java",
        filename:"java"
    },

    {
        languageName:"cpp",
        filename:"cpp"
    },

   
]
mycoding.forEach((item)=>{
    console.log(item.languageName);
    
})



