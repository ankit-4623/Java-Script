const name = "ankit"
const repo = 4
//console.log(name+repo);

// mordern string 
// console.log(`hello my name is ${name} and my repo count is ${repo}`);
const gamename = new String ('ankit nayek is a coder and a developer')
// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(1));
// console.log(gamename.indexOf('i'));


// substring
const newString = gamename.substring(1,5)
// console.log(newString)


const anotherString = gamename.slice(-5,5)
// console.log(anotherString);

const newStringOne = "          ankit"
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ankit.com/ankit%30nayek"

console.log(url.replace('%30','--'));

console.log(url.includes('sonali'));


console.log(gamename.split(' '))

