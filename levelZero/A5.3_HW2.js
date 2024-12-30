console.log("A5.3_HW2");
console.log("---- ---- ----");
console.log("1.1");

function printNumbersPattern(n , m) {
    let output = "";
    for(let i = 1; i <= n; i++) {
        output = output + i;
        if (i % m === 0 && i != n) {
            output = output + "%";
        }
    }
    console.log(output);
}

printNumbersPattern(20, 5)

console.log("---- ---- ----");
console.log("1.2");

function printDivisibleAndNotDivisible(n, m) {
    let divisibleNumbers = "";
    let notDivisibleNumbers = "";
    for (let i = 10; i <= n; i++) {
        if (i % m === 0) {
            divisibleNumbers = divisibleNumbers + " " + i;
        } else {
            notDivisibleNumbers = notDivisibleNumbers + " " + i;
        }
    }
    console.log("Divisible by 5: ", divisibleNumbers);
    console.log("Not Divisible by 5: ", notDivisibleNumbers);
}

printDivisibleAndNotDivisible(30, 5);

console.log("---- ---- ----");
console.log("1.3");

function printEvenNumberBetween(p, n, m) {
    if (p < n < m) {
        for (let i = p; i <= m; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
}

printEvenNumberBetween(8, 5, 15);