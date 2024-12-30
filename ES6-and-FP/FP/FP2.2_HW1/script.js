const students = [

    { name: "Alice", grade: 80 },
  
    { name: "Bob", grade: 65 },
  
    { name: "Charlie", grade: 90 },
  
  ];
  
const lowerThan70 = students.filter((sts) => sts.grade > 70);
console.log(lowerThan70);

const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Smartphone", price: 800 },
  
    { name: "Tablet", price: 500 },
  
  ];
  
const priceHigherThan1000 = products.filter((product) => product.price < 1000);
console.log(priceHigherThan1000);

const employees = [

    { name: "Alice", salary: 60000 },
  
    { name: "Bob", salary: 45000 },
  
    { name: "Charlie", salary: 70000 },
  
  ];
  
const employeeSalaryLowerThan50000 = employees.filter((employee) => employee.salary > 50000);
console.log(employeeSalaryLowerThan50000);

const movies = [

    { title: "Inception", rating: 8.8 },
  
    { title: "Interstellar", rating: 8.6 },
  
    { title: "The Dark Knight", rating: 9.0 },
  
  ];
  
const higherThan7Rating = movies.filter((movie) => movie.rating > 7.0);
console.log(higherThan7Rating);

const cars = [

    { brand: "Toyota", year: 2018 },
  
    { brand: "Honda", year: 2019 },
  
    { brand: "Ford", year: 2010 },
  
  ];

const lessThan5Years = cars.filter((car) => (2024 - car.year) <= 5);
console.log(lessThan5Years);

const students1 = [

    { name: "Alice", gpa: 3.8 },
  
    { name: "Bob", gpa: 3.2 },
  
    { name: "Charlie", gpa: 3.9 },
  
  ];
  
const gpaLowerThan3 = students1.filter((std) => std.gpa > 3.5);
console.log(gpaLowerThan3);

const fruits = [

    { name: "Apple", pricePerPound: 1.5 },
  
    { name: "Banana", pricePerPound: 2.2 },
  
    { name: "Orange", pricePerPound: 1.8 },
  
  ];
  
const fruitLowerThan2 = fruits.filter((fruit) => fruit.pricePerPound < 2);
console.log(fruitLowerThan2);

const employees1 = [

    { name: "Alice", employed: true },
  
    { name: "Bob", employed: false },
  
    { name: "Charlie", employed: true },
  
  ];
  
const employed = employees1.filter((employee) => employee.employed === true);
console.log(employed);

const products1 = [

    { name: "Laptop", inStock: true },
  
    { name: "Smartphone", inStock: false },
  
    { name: "Tablet", inStock: true },
  
  ];

const stockedProducts = products1.filter((prod) => prod.inStock === true);
console.log(stockedProducts)
  
const laptops = [

    { brand: "Dell", screenSize: 14 },
  
    { brand: "HP", screenSize: 15.6 },
  
    { brand: "Lenovo", screenSize: 13 },
  
    { brand: "Acer", screenSize: 17 },
  
  ];
  
const screenSizeBiggerThan15 = laptops.filter((laptop) => laptop.screenSize > 15);
console.log(screenSizeBiggerThan15);  