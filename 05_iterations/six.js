const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(values); // undefine

const nums = [1,2,3,4,5,6]
// const ne = nums.filter((num)=>num>5)
// console.log(ne);

// const ne = nums.filter((num)=>{

//   return   num>5


// })

// const ne = []
// nums.forEach((num)=>{
//     if(num>2)
//     {
//         ne.push(num)
//     }
// })
// console.log(ne);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userbook = books.filter((item)=>item.genre==='History')

  userbook = books.filter((item)=>{
    return item.publish>=1995 && item.genre==='History'
     
  })
console.log(userbook);



