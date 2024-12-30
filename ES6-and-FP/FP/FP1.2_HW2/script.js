const students = [

    { name: "Alice", score: 85 },
  
    { name: "Bob", score: 55 },
  
    { name: "Charlie", score: 75 },
  
];
  
const passedProp = students.map((student) => ({...student, passed: student.score > 60 ? true : false}));
console.log(passedProp);

const songs = [

    { title: "Bohemian Rhapsody", duration: 367 },
  
    { title: "Hotel California", duration: 420 },
  
    { title: "Stairway to Heaven", duration: 482 },
  
  ];
  
const durationMinutes = songs.map((song) => ({...song, duration: `${Math.floor(song.duration / 60)}:${song.duration % 60}`}));
console.log(durationMinutes)

const employees = [

    { name: "Alice", salary: 50000 },
  
    { name: "Bob", salary: 60000 },
  
    { name: "Charlie", salary: 70000 },
  
  ];
  
const annualIncome = employees.map((employee) => ({...employee, annualIncome: employee.salary * 12}));
console.log(annualIncome);

const newStudents = [

    { name: "Alice", age: 22 },
  
    { name: "Bob", age: 17 },
  
    { name: "Charlie", age: 25 },
  
];

const classfication = newStudents.map((student) => ({...student, classfication: student.age > 18 ? "adult" : "minor"}));
console.log(classfication);

const employees2 = [

    { name: "Emily", salary: 60000 },
  
    { name: "David", salary: 45000 },
  
    { name: "Grace", salary: 75000 },
  
  ];
  
const dollarSign = employees2.map((employee) => ({...employee, salary: "$" + employee.salary}));
console.log(dollarSign);

const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Headphones", price: 50 },
  
    { name: "Smartphone", price: 800 },
  
];

const priceStatus = products.map((product) => ({...product, label: product.price > 100 ? "expensive" : "affordable"}));
console.log(priceStatus);

const books = [

    { title: "The Catcher in the Rye", year: 1951 },
  
    { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  
    { title: "The Hunger Games", year: 2008 },
  
];
  
const classicOrModern = books.map((book) => ({...book, category: book.year > 2000 ? "modern" : "classic"}));
console.log(classicOrModern);

const developers = [

    { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  
    { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  
    { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
  
  ]

const annualInc = developers.map((dev) => ({...dev, annualInc: (dev.hourlyRate * dev.hoursPerWeek) * 50}));
console.log(annualInc);

const salesReps = [

    { name: "David", monthlyCommission: 8000 },
  
    { name: "Helen", monthlyCommission: 10000 },
  
    { name: "Ivan", monthlyCommission: 6000 },
  
  ];
  
const salesRepsIncome = salesReps.map((reps) => ({...reps, annualIncome: (reps.monthlyCommission * 12) + 50000}));
console.log(salesRepsIncome);

const studentsObj = [

    { name: "Alice", score: 85 },
  
    { name: "Bob", score: 60 },
  
    { name: "Charlie", score: 92 },
  
  ];
  
const studentsObjGrades = studentsObj.map((student) => {
    let grade = "";
    if (student.score >= 90) {
        grade = "A"; 
    } else if (student.score >= 80) {
        grade = "B";
    } else if (student.score >= 70) {
        grade = "C";
    } else if (student.score >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }
    return ({...student, grade: grade})
})
console.log(studentsObjGrades)