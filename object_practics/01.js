const student = {
    name:"David Rayy",
    sclass: "VI",
    rollno: 12
}

console.log(`Name: ${student.name}, Class: ${student.sclass}, Roll: ${student.rollno}`);

//Delete property from object
//delete student.rollno
//console.log(student)

// Length of a object
const objLength = Object.keys(student).length
console.log(objLength);