let car = {
    brand: "Toyota",
    model: "Corolla"
};

console.log(car.brand);
console.log(car.model);

car.brand = "Honda";

console.log(car);

car.year = 2022;
car.color = "Blue";

console.log("Properties of car object")
const keys = Object.keys(car);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${car[key]}`);
}

let citizen = {
    name: "Ramesh Kumar",
    age: 65,
    occupation: "Retired"
};

citizen.age = 68;
console.log(`Updated Age: ${citizen.age}`);

citizen.age += 2;
console.log(`Updated age after adding 2: ${citizen.age}`);

citizen.city = "Delhi";
console.log("Properties of citizen object");
const citizenKeys = Object.keys(citizen);
for (let i = 0; i < citizenKeys.length; i++) {
    const key = citizenKeys[i];
    console.log(`${key}: ${citizen[key]}`)
}

let person = {
    name: "Akil",
    age: 55
};

person.bp = "Normal";

if (person.age > 60 && person.bp === "Normal") {
    console.log("Not fit to travel");
} else {
    console.log("Fit to travel.")
}