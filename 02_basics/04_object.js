//const tinderuser = new Object() single turn object
const tinderuser ={}
 tinderuser.name = "Samm"
  tinderuser.isloggin = false

//console.log(tinderuser);
const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firsname:"ankit",
            lastname:"nayek"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firsname);
// console.log(regularUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {...obj1,...obj2 }
const obj3 = Object.assign({} ,obj1,obj2)
//console.log(obj3);
const user = [
    {
        id:1,
        email:"ankit&sso"
    },
    {
        id:1,
        email:"sonali&sso",
    },
    {
        id:1,
        email:"fffff&sso"
    }
]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('islogged'));
//********************************************** */

const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"ankit"

}

const {courseInstructor:instructor}= course
console.log(instructor);
// const navbar = ({company})=>{



// }
// navbar(company = "ankit")
 

// {
//     "name":"ankit",
//     "coursename":"js",
//     "price":"free"
// } 