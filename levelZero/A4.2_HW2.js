console.log("A4.2_HW2");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1");
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

checkEvenOdd(21);

console.log("---- ---- ----");

console.log("1.2");
function checkGrade(score, passingScore) {
    if (score >= passingScore) {
        console.log("Congratulations, You have passed");
    } else {
        console.log("You have failed");
    }
} 

checkGrade(85, 60);

console.log("---- ---- ----");

console.log("1.3");
function calculateAllowance(age, isStudent, baseAllowance) {
    if (age < 18 && isStudent) {
        return baseAllowance = baseAllowance + 100;
    } else if ((age <= 18 && age >= 25) && isStudent) {
        return baseAllowance = baseAllowance + 50;
    } else {
        return baseAllowance;
    }
}

console.log("The updated allowance is: " + calculateAllowance(16, true, 500));