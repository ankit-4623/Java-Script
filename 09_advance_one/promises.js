// fetch('http://something.com').then().catch().finally()
// const promise = new Promise(function (resolve,reject) {
//     // do an async task
//     //DB calls,cryptography,network
//     setTimeout(function () {
//       console.log('task is compelete');
//        resolve()
//     },1000)
// })


// promise.then(function () {
//     console.log('promise consumed');
// })

// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log("async task 2");
//         resolve()
        
//     },1000)
// }).then(function () {
//     console.log("async 2 resolved");
    
// })



// const promise_three = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve({username:'ankit',email:"ankit@example.com"})
//     },1000)
// })
// promise_three.then(function (user) {
//     console.log(user);
    
// })
// const promise_four = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         let error = true
//        if(!error){
//         resolve({username:'ankit',email:"123@example.com"})
//        }
//        else{
//         reject('error something went wrong')
//        }
//     },2000)
// })
// promise_four.then( (user)=> {
//     console.log(user);
//     return user.username
// }).then(function (username) {
//     console.log(username);
    
// }).catch(function (error) {
//     console.log(error);
    
// }).finally(()=>console.log("the promise is either resolved "))


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function () {
        let error = false
       if(!error){
        resolve({username:'sonali',email:"123@example.com"})
       }
       else{
        reject('error 777 something went wrong')
       }
    },1000)
})


async function promise_Five() {
  try {
     const response = await promiseFive
   console.log(response);
  }
   catch{
    console.log(error);
    
   }
}
promise_Five()

// async function getall() {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/user')
//     // const data = response.json()
//     // console.log(data);
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/user')
//     const data = await response.json()
//     console.log(data);
//     //console.log(response);
    
//     } catch (error) {
//         console.log('e:,error');
        
//     }


// }
// getall()
 
fetch('https://jsonplaceholder.typicode.com/user')
.then((response)=>{
 return response.json()
})
.then((date)=>{
console.log(data);

})
.catch((error)=>console.log(error)
)

 