let mydate  = new Date()
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);

//let mycreateddate = new Date(2023 , 0 ,23)
//console.log(mycreateddate.toDateString());

// month starts from 0 in javascript

//let mycreateddate1 = new Date(2023 , 0 ,23 , 5 ,3)
//console.log(mycreateddate1.toLocaleString());

let mycreateddate = new Date("01-14-2023")
//console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));
let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

//`${newdate.getDay()} and the time is `

newdate.toLocaleString('default',{
    weekday:"long",

})

