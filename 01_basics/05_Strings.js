const name  = "Aahaan"
const repocount = 50

// console.log(name + repocount + " Value");   outdated syntax

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('Aahaan')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('n'));

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-6,4)  
console.log(anotherstring);

const newstringOne = "    Aahaan   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://Aahaan.com/Aahaan%20Sethi"
console.log(url.replace('%20','-'))
console.log(url.includes('SRM'));

const secondname = new String ('Aahaan-Sethi-com')
console.log(secondname.split('-'));


