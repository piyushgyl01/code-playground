const numsArray = [10, 5, 8, 4, 6];

const numsArraySqrDiff = numsArray.map((num) => (num - num * num ));
console.log(numsArraySqrDiff)

const numbsArray = [3, -2, -5, 12, 8, -4, 7];

const numbsArrayDoubleNegative = numbsArray.map((num) => num > 0 ? num : num - (num * 2));
console.log(numbsArrayDoubleNegative)

const sentencesArray = [

    "JavaScript is a powerful programming language.",
  
    "Web development involves frontend and backend technologies.",
  
    "Coding is a skill that can be learned and mastered over time.",
  
  ];
  
const sentencesArrayLength = sentencesArray.map((sentence) => sentence + " " + sentence.split(" ").length);
console.log(sentencesArrayLength);  

const cars = [

    { brand: "Toyota", model: "Camry" },
  
    { brand: "Honda", model: "Accord" },
  
    { brand: "Ford", model: "Mustang" },
  
  ];
  
const brands = cars.map((car) => car.brand);
console.log(brands);

const movies = [

    { title: "Inception", genre: "Sci-Fi" },
  
    { title: "The Shawshank Redemption", genre: "Drama" },
  
    { title: "The Dark Knight", genre: "Action" },
  
  ];
  
const genres = movies.map((genre) => genre.genre);
console.log(genres);

const furniture = [

    { type: "Sofa", width: 200, height: 80 },
  
    { type: "Table", width: 120, height: 60 },
  
    { type: "Chair", width: 50, height: 45 },
  
  ];
  
const adjustedDimensions = furniture.map((furniture) => ({...furniture, width: (furniture.width * 1.1).toFixed(2), height: (furniture.height * 1.1).toFixed(2)}));
console.log(adjustedDimensions);

const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Smartphone", price: 800 },
  
    { name: "Headphones", price: 50 },
  
    { name: "Camera", price: 300 },
  
  ];
  
const affordableProp = products.map((product) => ({...product, affordable: product.price <= 100 ? true : false}));
console.log(affordableProp);

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

const evenNegativeNum = numbers.filter((num) => num % 2 === 0 && num < 0);
console.log(evenNegativeNum);

const students = [

    { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  
    { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  
    { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
  
  ];
  
const toppers = students.filter((std) => std.score > 70 && std.activeParticipant === true && (std.club === "Math" || std.club === "Science"));
console.log(toppers);  

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];

const filterWords = words.filter((word) => word.length > 5 && word.includes("a"));
console.log(filterWords);