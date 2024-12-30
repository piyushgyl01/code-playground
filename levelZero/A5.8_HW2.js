console.log("A5.8_HW2");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

const recipe = {
    name: "Pasta Carnonara",
    cusine: "Italian"
}

console.log("---- ---- ----");
console.log("1.1");

console.log(recipe.name);

console.log("---- ---- ----");
console.log("1.2");

console.log(recipe.cusine);

console.log("---- ---- ----");
console.log("1.3");

recipe.name = "Bell Pepper Pizza";
console.log(recipe);

console.log("---- ---- ----");
console.log("1.4");

recipe.difficulty = "Intermediate";
console.log(recipe.difficulty);

console.log("---- ---- ----");
console.log("1.5")

for (let property in recipe) {
    console.log(`${property}: ${recipe[property]}`)
}

console.log("Excercise 2");
console.log("---- ---- ----");

const laptop = {
    isTouchScreen: true,
    screenSize: 15.6,
    model: "XPS 15"
}

console.log("2.1");

laptop.brand = "Dell";
console.log(laptop.brand);

console.log("---- ---- ----");
console.log("2.2");

laptop.processor = "Intel Core i7";
console.log(laptop.processor);

console.log("---- ---- ----");
console.log("2.3");

laptop.screenSize = 15.4;
console.log(laptop.screenSize);

console.log("---- ---- ----");
console.log("2.4")

for (let property in laptop) {
    console.log(`${property}: ${laptop[property]}`)
}
