console.log("A5.9_CW");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

const citizen = {
    name: "Sandeep",
    age: 65
}

console.log("1.1");

if (citizen.age >= 60) {
    console.log(`${citizen.name} is a senior citizen`)
} else {
    console.log(`${citizen.name} is not a senior citizen`)
}

console.log("---- ---- ----");
console.log("1.2");

citizen.bp = "normal";

console.log("---- ---- ----");
console.log("1.3");

if (citizen.age >= 60 && citizen.bp === "normal") {
    console.log("Fit to travel");
} else {
    console.log("Not fit to travel")
}

console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

function incrementAge(person) {
    console.log("2.1");
    console.log("Person: ", person)

    console.log("---- ---- ----")
    console.log("2.2")

    const newPerson = {...person}
    console.log(`Is newPerson same as person? ${newPerson === person}`)

    if (newPerson.isBirthday) {
        newPerson.age = newPerson.age + 1;
    }
    console.log("New Person: ", newPerson)
}

const person = {
    name: "Rajesh",
    age: 36, 
    isBirthday: true
}

incrementAge(person)

console.log("---- ---- ----");
console.log("Excercise 3");
console.log("---- ---- ----");

function employeeRecord(employee1, employee2) {
    if (employee1.hoursWorked > employee2.hoursWorked) {
        return true;
    } else {
        return false;
    }
}

const employee1 = {
    name: "Amit",
    hoursWorked: 160
}

const employee2 = {
    name: "Suresh",
    hoursWorked: 180
}

console.log(`Has Amit worked more than the Suresh? ${employeeRecord(employee1, employee2)}`);