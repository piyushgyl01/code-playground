console.log("A5.11_HW1")
console.log("---- ---- ----")

const studentData = [
    { studentName: "John", rollNo: 201, science: 88, history: 75,
    geography: 90 },
    
    { studentName: "Alice", rollNo: 202, science: 92, history: 85,
    geography: 88 },
    
    { studentName: "Bob", rollNo: 203, science: 78, history: 89,
    geography: 91 }
];

console.log("1.1");
console. log("---- ---- ----")

function printReportCard(rollNo) {
    let student = getReportByRollNo(rollNo);
    console.log(`===== Report Card for ${student.studentName} ===== \n Roll No. : ${student.rollNo} \n ----- \n Marks: \n ----- \n Science: ${student.science} \n History: ${student.history} \n Geography: ${student.geography} \n ------ ------ ------ \n`)
}

function getReportByRollNo(rollNo) {
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].rollNo === rollNo) {
            return studentData[i];
        }
    }
}

printReportCard(201);

printReportCard(202);

printReportCard(203);

console.log("---- ---- ----")
console.log("1.2");
console.log("---- ---- ----")

function getStudentsDataByCutOff(subjectName, cutOff) {
    let result = [];
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i][subjectName] >= cutOff) {
            result.push(studentData[i]);
        }
    }
    return result;
}

console.log(`Student data with cutoff for science > 80`);
console.log(getStudentsDataByCutOff("science", 80));

console.log(`Student data with cutoff for history > 90`);
console.log(getStudentsDataByCutOff("history", 90));

console.log(`Student data with cutoff for geography > 90`);
console.log(getStudentsDataByCutOff("geography", 90));

console.log("---- ---- ----")
console.log("1.3");
console.log("---- ---- ----")

for (let i = 0; i < studentData.length; i++) {
    let numOfSubjects = 3;

    let totalMarks = studentData[i].geography + studentData[i].history + studentData[i].science;

    studentData[i].totalMarks = totalMarks

    studentData[i].avgMarks = studentData[i].totalMarks / numOfSubjects;
}

function printStudentsAboveAverage(avgCuttOff) {
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].avgMarks > avgCuttOff) {
            console.log(`${studentData[i].studentName} has average marks ${studentData[i].avgMarks}`);
        }
    }
}

printStudentsAboveAverage(82);

console. log("---- ---- ----")
console.log("1.4");
console. log("---- ---- ----")

function getHighestAverageMarks(data) {
    let highestAvgMarks = data[0].avgMarks;
    for (let i= 1; i < data.length; i++) {
        if (data[i].avgMarks > highestAvgMarks) {
            highestAvgMarks = data[i].avgMarks
            console.log(studentData[i])
        }
    }
    return highestAvgMarks;
}

console.log(`Student with highest average marks: ${getHighestAverageMarks(studentData)}`)