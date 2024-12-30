const rectangleArea = (length = 3, width = 5) => length * width;
console.log(rectangleArea());  
console.log(rectangleArea(3, 4));  

const concatenateStrings = (str1 = "Hello", str2 = " neoG") => str1 + str2;
console.log(concatenateStrings("Hello", " World")); 
console.log(concatenateStrings("Hello")); 

const cylinderVolume = (radius = 2, height = 4) => Math.PI * radius * radius * height;
console.log(cylinderVolume(3)); 
console.log(cylinderVolume(3, 5));

const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity;
console.log(shoppingCartTotal(10));
console.log(shoppingCartTotal(15, 3)); 
console.log(shoppingCartTotal());

const generateUserProfile = (username = "Guest", age = 25, country = "Unknown") => `Username: ${username}, Age: ${age}, Country: ${country}`;
console.log(generateUserProfile()); 
console.log(generateUserProfile("Alice", 30, "USA")); 

const sumArrow = (a, b = 5) => a + b;
console.log(sumArrow(2, 4)); 
console.log(sumArrow(3));   

const calculatePower = (base, exponent = 2) => base ** exponent;
console.log(calculatePower(2, 3));
console.log(calculatePower(5));
  
const triangleArea = (base, height = 4) => 0.5 * base * height;
console.log(triangleArea(5));
console.log(triangleArea(3, 6)); 

const concatenateStringsAgain = (str1 = "Good", str2 = "") => str1 + str2;
console.log(concatenateStringsAgain("Good"));