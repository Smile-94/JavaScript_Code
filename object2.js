//object singleton
const tinderUser = new Object()

tinderUser.id = "123ABC"
tinderUser.name = "Jhon Deo"
tinderUser['address user'] = "Uttara Dhaka"


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            first_name : "Ali",
            last_name: "Hossain"
        }
    }
}
console.log(`${regularUser.fullname.userfullName.first_name} ${regularUser.fullname.userfullName.last_name}`);

// Combine object


const obje1 = {1: "A", 2:"B"}
const obje2 = {3:"C",4: "D", 1:"F"}
const obj4 = {...obje1, ...obje2}
const obj3 = Object.assign({},obje1,obje2)
console.log(obj4);


let object_key = Object.keys(tinderUser)
console.log(object_key);

let object_value = Object.values(tinderUser)
console.log(object_value);

console.log(tinderUser.hasOwnProperty('name'));