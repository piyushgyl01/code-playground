console.log("A5.6_HW1");
console.log("---- ---- ----");

console.log("Excercise 1");

let viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42];

console.log("1.1");

console.log("Runs divisible by 3.")
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 3 === 0) {
        console.log(viratKohliRuns[i]);
    }
}

console.log("---- ---- ----");
console.log("1.2");

console.log("Runs divisible by 5.")
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 5 === 0) {
        console.log(viratKohliRuns[i]);
    }
}

console.log("---- ---- ----");
console.log("1.3");

let newArray = [];
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 2 === 0) {
        newArray.push(viratKohliRuns[i]);
    }
}

console.log("The new array: ", newArray)

console.log("---- ---- ----");
console.log("1.4");

let sum = 0;
for (let i = 0; i < viratKohliRuns.length; i++) {
    sum = sum + viratKohliRuns[i];
}

console.log("Total runs: ", sum);

console.log("---- ---- ----");
console.log("1.5");

let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < viratKohliRuns.length; i++) {
    if (viratKohliRuns[i] % 2 === 0) {
        sumEven = sumEven + viratKohliRuns[i];
    }
    if (viratKohliRuns[i] % 2 !== 0) {
        sumOdd = sumOdd + viratKohliRuns[i];
    }
}

console.log("Sum of all Even Numbers: " + sumEven)
console.log("Sum of all Odd Numbers: " + sumOdd)