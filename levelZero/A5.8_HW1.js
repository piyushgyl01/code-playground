console.log("A5.8_HW1");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

// const car = {
//     brand: "toyota",
//     model: "corolla"
// }

const animal = {
    name: "Lion",
    averageWeight: 190,
    sound: "Roar"
}

console.log("1.1");

console.log(animal.name);

console.log("---- ---- ----");
console.log("1.2");

console.log(animal.averageWeight);

console.log("---- ---- ----");
console.log("1.3");

console.log(animal.sound);

console.log("---- ---- ----");
console.log("1.4");

animal.averageWeight = 210;

console.log("---- ---- ----");
console.log("1.4")

console.log("Updated Animal: ", animal)

console.log("---- ---- ----");
console.log("1.5")

animal.diet = "Carnivrores";

console.log("---- ---- ----");
console.log("1.6")

console.log("All properties of animal object")

for (property in animal) {
    console.log(`${property}: ${animal[property]}`)
}

console.log("Excercise 2");
console.log("---- ---- ----");

// const citizen = {
//     name: "Ramesh Kumar",
//     age: 65,
//     occupation: "Retired"
// }

const movie = {
    title: "Inception",
    director: "Christopher Nolan"
}

console.log("2.1");

movie.year = 2010;
console.log(movie.year);

console.log("---- ---- ----");
console.log("2.2");

movie.duration = 154;
console.log(movie.duration);

console.log("---- ---- ----");
console.log("2.3");

movie.duration = 148;
console.log("Updated durationL: " + movie.duration);

console.log("---- ---- ----");
console.log("2.4")

movie.year = movie.year + 1;
console.log("Updated year: ", + movie.year);

console.log("---- ---- ----");
console.log("2.5");

for (let property in movie ) {
    console.log(`${property}: ${movie[property]}`)
}