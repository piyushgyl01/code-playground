console.log("A5.5_HW1");
console.log("---- ---- ----");

let favouriteBooks = ["To Kill a Mocking Bird", "Pride and Prejudice", "1984", "The Great Gatsby"];

console.log("1.1")
console.log(favouriteBooks);

console.log("1.2")
console.log(favouriteBooks[1]);

console.log("1.3")
console.log("Number of cities: " + favouriteBooks.length);

console.log("1.4")
console.log(favouriteBooks[favouriteBooks.length - 1]);

console.log("1.5")
for ( let i = 0; i < favouriteBooks.length; i++) {
    console.log(favouriteBooks[i]);
}

console.log("1.6");
favouriteBooks.push("Harry Porter and Sorcerer Stone");
console.log(favouriteBooks);

console.log("1.7")
console.log("Updated Number of cities: " + favouriteBooks.length);