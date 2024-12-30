const words = ["apple", "banana", "kiwi", "orange", "grape"];
const firstThreeWords = words.map((word) => word.slice(0, 3));
console.log(`The first three words: ${firstThreeWords.join(", ")}`);

const nums = [1, 2, 3, 4, 5];
const cubeOfNums = nums.map((num) => num * num * num);
console.log(`The cube of first three numbers: ${cubeOfNums.join(", ")}`);

const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const removeFirstTwo = fruitsArray.map((fruit) => fruit.slice(2));
console.log(`Array after removing first two words: ${removeFirstTwo.join(", ")}`);

const salaries = [5000, 7500, 12000, 3000, 9000];
const bonus = salaries.map((salary) => salary + (salary * 0.1));
console.log(`Salaries with 1% bonus ${bonus.join(", ")}`);

const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const addHello = names.map((name) => "Hello " + name);
console.log(`Names with "Hello" added: ${addHello.join(", ")}`);

const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
const sentencesLength = sentences.map((sentence) => sentence.length);
console.log(`Sentence's Length: ${sentencesLength.join(", ")}`)

const temperaturesCelsius = [0, 20, 37, -5, 10];
const FahrenheitValues = temperaturesCelsius.map((temp) => (temp * 9 / 5) + 32);
console.log(`Fahrenheit Values: ${FahrenheitValues.join(", ")}`)

const prices = [50, 75, 120, 30, 90];
const discountedPrice = prices.map((price) => price - price * 0.1);
console.log(`Discounted price: ${discountedPrice.join(", ")}`);

const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const fixedNumbers = decimalNumbers.map((num) => num.toFixed(2));
console.log(`Fixed Numbers: ${fixedNumbers.join(", ")}`);

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];
const namesLength = namesArray.map((name) => name + `${name.length}`);
console.log(`Names Length: ${namesLength.join(", ")}`);