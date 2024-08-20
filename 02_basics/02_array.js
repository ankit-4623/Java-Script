const matvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//matvel_heros.push(dc_heros)
// console.log(matvel_heros);

// const allHeros = matvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [... matvel_heros,...dc_heros]
console.log(all_new_heros);


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));
console.log(Array.from({name:"sonali"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






 