console.log("A5.4_CW");
console.log("---- ---- ----");

console.log("1.1");
function sumUptoN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumUptoN(5));

console.log("---- ---- ----");

console.log("1.2");
function sumOfOddNumbersUptoN(n) {
    let sum = 0;
    for (let i =1; i <= n; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sumOfOddNumbersUptoN(7));

console.log("---- ---- ----");

console.log("1.3");
function sumDivisibleBy3And7UptoN(n) {
    let sumOfNumbersDivisibleBy3 = 0;
    let sumOfNumbersDivisibleBy7 = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            sumOfNumbersDivisibleBy3 = sumOfNumbersDivisibleBy3 + i;
        }
        if (i % 7 === 0) {
            sumOfNumbersDivisibleBy7 = sumOfNumbersDivisibleBy7 + i;
        }
    }
    console.log("Sum of numbers divisible by 3: " + sumOfNumbersDivisibleBy3)
    console.log("Sum of numbers divisible by 7: " + sumOfNumbersDivisibleBy7)
}

sumDivisibleBy3And7UptoN(21);

console.log("---- ---- ----");

console.log("1.4");
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5))