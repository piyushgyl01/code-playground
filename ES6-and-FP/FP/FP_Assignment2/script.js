const books = [
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },
    { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  ];

const returnFantasyGenre = (obj) => {
    const filterFantsay = obj.filter((object) => object.genre === "Fantasy");
    return filterFantsay;
};

console.log(returnFantasyGenre(books));

const movies = [

    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  
    { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  
    { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" },
  
  ];
  
const movieFilter = movies.filter((movie) => (movie.year >= 2010 && movie.rating > 8.0 && (movie.genre === "Action" || movie.genre === "Adventure")));
console.log(movieFilter);

const restaurants = [

    { name: "Pasta Paradise", stars: 4.5, cuisine: "Italian", openOnSundays: false },
  
    { name: "Sushi Sensation", stars: 3.8, cuisine: "Japanese", openOnSundays: true },
  
    { name: "Burger Binge", stars: 4.2, cuisine: "American", openOnSundays: true },
  
    { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true },
  
  ];
  
const filteredRestaurants = restaurants.filter((restaurant) => restaurant.stars > 4 && restaurant.cuisine === "Italian" && restaurant.openOnSundays);
console.log(filteredRestaurants);  

const products = [

  { name: 'Bread', price: 480, quantity: 3 },

  { name: 'Clips', price: 200, quantity: 5 },

  { name: 'green Bread Knife', price: 3077, quantity: 1 },

  { name: 'Slipper', price: 150, quantity: 2 },

]

const returnOnlyBread = products.filter((product) => product.name.includes("Bread"));
console.log(returnOnlyBread);

const employees = [

    { name: "David", salary: 60000 },
  
    { name: "Emma", salary: 75000 },
  
    { name: "Alex", salary: 90000 },
  
    { name: "Sophie", salary: 55000 },
  
  ];
  
const totalSalary = employees.reduce((acc, curr) => (acc + curr.salary), 0);
const averageSalary = totalSalary / employees.length;
console.log(averageSalary);

const appendAverageStatus = employees.map((employee) => ({...employee, aboveAverage: employee.salary > averageSalary ? true : false}));
console.log(appendAverageStatus);

const community = [
    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
    { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
    { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
    { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
];
  
const mostActivePerson = community.reduce((acc, curr) => {
    const totalHoursCurr = curr.hours.reduce((sum, hours) => sum + hours, 0);
    const totalHoursAcc = acc.hours.reduce((sum, hours) => sum + hours, 0);
    return totalHoursCurr > totalHoursAcc ? curr : acc;

});
console.log(mostActivePerson);

const communityData = [

    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  
    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  
    { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  
    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  
    { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  
    { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  
    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  
    { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] }
  
  ];
  
  
const regularStudents = communityData.map((user) => ({...user, tag: user.hours.reduce((sum, hours) => sum + hours, 0) > 20 && user.role === "student" ? "regular" : user})
)
console.log(regularStudents);