const calculateAverage = numbers => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}
console.log(calculateAverage([5, 10, 15])); 

const reverseString = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("world")); 

const findLongestWord = words => {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord(["apple", "banana", "grapefruit"])); 

const calculateStringLength = str => {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        length++;
    }
    return length
}
console.log(calculateStringLength("hello")); // Output: 5

const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 88 }
];

const calculateAverageGrade = students => {
    let totalGrade = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].grade;
    }
    return totalGrade / students.length;
}
console.log("Average Grade:", calculateAverageGrade(students)); 

const getNames = students => {
    let names = [];
    for (let i = 0; i < students.length; i++) {
        names.push(students[i].name);
    }
    return names;
}
console.log(getNames(students));

const calculateAverageAge = students => {
    let totalAge = 0;
    for (let i = 0; i < students.length; i++) {
        totalAge += students[i].age;
    }
    return totalAge / students.length;
}
console.log("Average Age:", calculateAverageAge(students));

const highGrades = students => {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 90) {
            result.push(students[i]);
        }
    }
    return result;
}
console.log(highGrades(students)); 

const below18 = students => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].age < 18) {
            return true;
        }
    }
    return false;
}
console.log(below18(students)); 

const findStudentByName = (students, name) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            return students[i];
        }
    }
}
console.log(findStudentByName(students, "Charlie")); 

const getHighScoreStudents = students => {
    let highScorers = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > 85) {
            highScorers.push(students[i].name);
        }
    }
    return highScorers;
}
console.log(getHighScoreStudents(students)); 
