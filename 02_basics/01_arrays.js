const myarr = [0 ,1, 2, 3, 4, 5]
const myheroes = ["Iron man", "Thor"]
const myarr2 = new Array(1,2,3,4)
//console.log(myarr[1]);


// Array methods

myarr.push(6)
myarr.push(9)
myarr.pop()
myarr.pop()
//console.log(myarr);

myarr.unshift(0)
// inserts value at start of array at zero'th index
//console.log(myarr);

myarr.shift()
// removes element at zero'th index
//console.log(myarr);

//console.log(myarr.includes(9));
//console.log(myarr.indexOf(3));

const newarr = myarr.join()
// newarr is of string type after joining
//console.log(myarr);
//console.log(newarr);
//console.log(typeof newarr);

// slice , splice

console.log("A ", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3)

console.log("C ", myarr);
console.log(myn2);




