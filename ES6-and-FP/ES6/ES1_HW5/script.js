let studentsData = [
    { name: 'Rahul', rollNo: 101, hindi: 80, english: 75, maths: 90 },
    { name: 'Amit', rollNo: 102, hindi: 85, english: 70, maths: 95 },
    { name: 'Priya', rollNo: 103, hindi: 78, english: 92, maths: 87 }
  ];

  const marksForComputer = [88, 92, 95];
  for (let i = 0; i < marksForComputer.length; i++) {
    studentsData[i].computer = marksForComputer[i];
  }

console.log("1.1: Students Data with Computer Marks");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}`);
}

const marksForScience = [82, 90, 88];
for (let i = 0; i < studentsData.length; i++) {
    studentsData[i].science = marksForScience[i];
}

console.log("\n")
console.log("1.2: Updated Students Data with Science Marks");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}, Science: ${student.science}`);
}

console.log("\n")
let kaveri = { name: 'Kaveri', rollNo: 104, hindi: 84, english: 88, maths: 78, computer: 90, science: 86 };
console.log("2.1: Kaveri's Data");
console.log(kaveri);

studentsData.push(kaveri);

console.log("\n")
console.log("2.2: Updated Students Data with Kaveri");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}, Science: ${student.science}`);
}

console.log("\n")
console.log("2.3: Updated Students Data with Total Marks");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    student.totalMarks = student.english + student.hindi + student.maths + student.science + student.computer;
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Total Marks: ${student.totalMarks}`);
}

console.log("2.4: Updated Students Data with Average Marks");
for (let i = 0; i < studentsData.length; i++) {
  const student = studentsData[i];
  student.avgMarks = student.totalMarks / 5;
  console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Average Marks: ${student.avgMarks}`);
}

function calculateGrade(avgMarks) {
    if (avgMarks >= 90 && avgMarks <= 100) {
        return "A";
    } else if (avgMarks >= 80 && avgMarks < 90) {
        return "B";
    } else if (avgMarks >= 70 && avgMarks < 80) {
        return "C";
    } else if (avgMarks >= 60 && avgMarks < 70) {
        return "D";
    } else if (avgMarks >= 50 && avgMarks < 60) {
        return "E";
    } else {
        return "F";
    }
}

for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    const grade = calculateGrade(student.avgMarks);

    console.log(`\n====== Report Card for ${student.name} ======`);
    console.log(`Roll No. : ${student.rollNo}`);
    console.log(`------`);
    console.log(`Marks`);
    console.log(`------`);
    console.log(`Hindi: ${student.hindi}`);
    console.log(`English: ${student.english}`);
    console.log(`Maths: ${student.maths}`);
    console.log(`Computer: ${student.computer}`);
    console.log(`Science: ${student.science}`);
    console.log(`------`);
    console.log(`Total: ${student.totalMarks}`);
    console.log(`Average: ${student.avgMarks.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log(`====== ====== ====== ======`);
}