const nums = [12, 5, 20, 8, 15, 30];
const numberBiggerThan10 = nums.filter((num) => num > 10);
console.log("Number bigger than 10:", numberBiggerThan10)

const words = ["hello", "world", "apple", "orange", "banana"];
const wordsContainO = words.filter((word) => word.includes("o"));
console.log("Words containing O:", wordsContainO)

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbersArray = numbers.filter((num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true
})
console.log("Prime Numbers:", primeNumbersArray);

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notThreeMuliples = threeMultiples.filter((num) => num % 3 !== 0);
console.log("Not multiples of three:", notThreeMuliples);

const wordsArray = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];
const reverseCasing = wordsArray.filter((word) => word === word.toUpperCase());
console.log("Uppercased letters:", reverseCasing);

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordEndWithY = wordsY.filter((word) => word.endsWith("y"))
console.log("Words with last letter being 'Y':", wordEndWithY)

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsMultipleOf2And2 = numsArr.filter((num) => num % 2 === 0 && num % 3 === 0);
console.log("Numbers that are multiples of both 2 and 3:", numsMultipleOf2And2);

const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];
const uAndYArr = feelingWords.filter((word) => word.includes("u", "y"));
console.log("Strings that includes the letter 'y' and 'u':", uAndYArr)

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfFiveOrThree = newNums.filter((num) => num % 5 === 0 || num % 3 === 0);
console.log("Numbers that are multiples of 5 or 3:", multiplesOfFiveOrThree);