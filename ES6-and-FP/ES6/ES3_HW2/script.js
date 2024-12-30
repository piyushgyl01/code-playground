const logFirstAndRest = (first, ...rest) => {
    console.log("First:", first);
    console.log("Rest:", rest);
};
logFirstAndRest(1, 2, 3, 4, 5);

const logFirstAndSecond = (first, second, ...rest) => {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Rest:", rest);
};

logFirstAndSecond(12, 22, 33, 44, 55);

const calculateProduct = (...numbers) => {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}
console.log(calculateProduct(2, 3, 4));
console.log(calculateProduct(5, 2, 1, 3)); 

const createSentence = (...words) => {
    let sentence = "";
    for (let i = 0; i < words.length; i++) {
        sentence =+ words[i]
        if (i < words.length - 1) {
            sentence += " ";
        }
    }
    return sentence;
}
console.log(createSentence("JavaScript", "is", "awesome"));

const findSum = (message, ...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(message, sum);
}
findSum("Sum of Numbers:", 2, 4, 6, 8, 10);

const containsValue = (value, ...array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(containsValue(3, 1, 2, 3, 4));  
console.log(containsValue("apple", "banana", "orange"));

const calculateAverage = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(calculateAverage(10, 5, 15)); 
console.log(calculateAverage(2, 4, 6, 8));