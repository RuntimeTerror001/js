// Primitve

// 7 types : String , Number , Boolearn , null , undefined , Symbol , BigInt 

const score = 100
const scorevalue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 34565435747489n



// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Aahaan",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);
