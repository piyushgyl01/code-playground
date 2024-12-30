const createPerson = (firstName, secondName) => ({ firstName, secondName});
console.log(createPerson("John", "Doe")); 

const StringInfo = str => ({ length: str.length, uppercase: str.toUpperCase() })
console.log(StringInfo("Hello"));

const createFullPerson = (firstName, lastName, age, phoneNumber) => ({
    fullName: `${firstName} ${lastName}`,
    age,
    phoneNumber
});
console.log(createFullPerson("Jane", "Smith", 30, "123-456-7890"));

const concatenateStrings = (word1, word2) => ({
    concatenation: `${word1} ${word2}`,
    charCount: word1.length + word2.length
});
console.log(concatenateStrings("Hello", "World"));

const calculateCircleProperties = (radius) => ({
    circumference: (2 * Math.PI * radius),
    area: (Math.PI * radius * radius)
});
console.log(calculateCircleProperties(5)); 

const calculateDifferenceAndQuotient = (num1, num2) => ({
    difference: num1 - num2,
    quotient: Math.floor(num1 / num2)
});
console.log(calculateDifferenceAndQuotient(10, 2)); 

const analyzeSentence = (sentence) => ({
    wordCount : sentence.split(" ").length
});
console.log(analyzeSentence("Javascript is fun"));

const calculateSquareAndCube = num => ({
    square: num * num,
    cube: num * num * num
});
console.log(calculateSquareAndCube(4));

const checkNumber = num => ({
    isPositive: num > 0,
    isNegative: num < 0
});
console.log(checkNumber(-7)); 
console.log(checkNumber(5));  

