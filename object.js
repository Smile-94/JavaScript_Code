// singleton

// object literals
const mySym = Symbol("key1")
//Object.create
const JsUser={
    name: "Sazzad",
    age: 20,
    [mySym] : "MyKey1",
    location : "Dhaka",
    email: "admin@domain.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "example@admin.com"

JsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`);
}

//Access the element in the object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser.greeting());
