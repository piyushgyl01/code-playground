console.log("A5.5_CW");
console.log("---- ---- ----");

let cities = ["New York", "London", "Tokyo"];

console.log("1.1")
console.log(cities);

console.log("1.2")
console.log(cities[1]);

console.log("1.3")
console.log("Number of cities: " + cities.length);

console.log("1.4")
console.log(cities[cities.length - 1]);

console.log("1.5")
for ( let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

console.log("1.6");
cities.push("Paris");
console.log(cities);

console.log("1.7")
console.log("Updated Number of cities: " + cities.length);