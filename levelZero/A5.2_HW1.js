console.log("A5.1_HW1");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

for(let i = 20; i >= 10; i--) {
    console.log(i);
}

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

for(let i = 10; i >= 1; i--) {
    let result = 6 * i;
    console.log(`6 * ${i} = ${result}`)
}

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

for(let i = 100; i >= 10; i -= 10) {
    console.log(i);
}


console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

console.log("2.1");
console.log("---- ---- ----");

function printNumbers(n) {
    for(let i = 1; i<= n; i++) {
        console.log(i);
    }
}

printNumbers(8);

console.log("---- ---- ----");
console.log("2.2");
console.log("---- ---- ----");

function printAllOddNumbers(n) {
    for(let i = 1; i<= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printAllOddNumbers(15);

console.log("---- ---- ----");
console.log("2.3");
console.log("---- ---- ----");

function printNumberDivisibleBy5(n) {
    for(let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 10 === 0) {
            console.log(i);
        }
    }
}

printNumberDivisibleBy5(50);