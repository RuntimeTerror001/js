// singleton - object of one kind .... if objects declared like literals singleton not created and if declared like constructors singletons are created

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Aahaan",
    age: 18,
    [mySym]: "mykey1",
    location: "Chennai",
    email : "abc@gmail.com",
    isLoggedIn: false,
lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(typeof JsUser.mySym);
console.log(JsUser.mySym);


JsUser.email = "abc@microsoft.com"
//Object.freeze(JsUser)
JsUser.email = "abc@google.com"
//console.log(JsUser);

JsUser.greeting  = function()
{
    console.log("Hello JS user");
    }
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greetingtwo());


