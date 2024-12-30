console.log("A5.12_HW1")
console.log("---- ---- ----")

const studentsData = [
    { 
        name: "Sarah", 
        rollNo: 201, 
        chemistry: 88, 
        homeScience: 78, 
        commerce: 92, 
        physicalEducation: 90, 
        moralScience: 85, 
        totalMarks: 433, 
        avgMarks: 86.6 
    },
    { 
        name: "Michael", 
        rollNo: 202, 
        chemistry: 75, 
        homeScience: 90, 
        commerce: 85, 
        physicalEducation: 94, 
        moralScience: 88, 
        totalMarks: 432, 
        avgMarks: 86.4 
    },
    { 
        name: "Emily", 
        rollNo: 203, 
        chemistry: 82, 
        homeScience: 95, 
        commerce: 88, 
        physicalEducation: 92, 
        moralScience: 90, 
        totalMarks: 447, 
        avgMarks: 89.4 
    },
    { 
        name: "David", 
        rollNo: 204, 
        chemistry: 95, 
        homeScience: 96, 
        commerce: 94, 
        physicalEducation: 99, 
        moralScience: 99, 
        totalMarks: 483, 
        avgMarks: 96.6 
    },
    { 
        name: "Olivia", 
        rollNo: 205, 
        chemistry: 85, 
        homeScience: 92, 
        commerce: 89, 
        physicalEducation: 91, 
        moralScience: 86, 
        totalMarks: 443, 
        avgMarks: 88.6 
    }
];

function findTopper(data) {
    let highestTotalStudent = data[0]
    for (let i = 1; i < data.length; i++) {
        if (data[i].totalMarks > highestTotalStudent.totalMarks) {
            highestTotalStudent = data[i];
        }
    }
    return highestTotalStudent;
}

function findGrade(avg) {
    if (avg >= 95) return "A+";
    if (avg >= 90) return "A";
    if (avg >= 85) return "B+";
    if (avg >= 80) return "B";
    if (avg >= 75) return "C+";
    if (avg >= 70) return "C";
    if (avg >= 65) return "D+";
    if (avg >= 60) return "D";
    if (avg >= 55) return "E";
    return "F";
}

function findAGradersCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].avgMarks >= 95) {
            count = count + 1;
        }
    }
    return count;
}

function findTotalMarks(data) {
    let classTotalMarks = 0;
    for (let i = 0; i < data.length; i++) {
        classTotalMarks = classTotalMarks + data[i].totalMarks
    }
    return classTotalMarks;
}

function calculateSubjectAverage(data, subjectName) {
    let totalMarks = 0
    for (let i = 0; i < data.length; i++) {
        totalMarks = totalMarks + data[i][subjectName]
    }
    return totalMarks / data.length;
}

function generateClassReport(studentData) {
    const topper = findTopper(studentData);
    const aGradersNames = [];
    let aGradersTotalMarks = 0;

    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].avgMarks >= 95) {
            aGradersNames.push(studentData[i].name)
            aGradersTotalMarks = aGradersTotalMarks + studentData[i].totalMarks;
        }
    }

    console.log(`====== CLASS PEFORMANCE REPORT ====== \n Topper: \n ------ \n Name: ${topper.name} \n Roll No. : ${topper.rollNo} \n Total Marks: ${topper.totalMarks} \n Grade: ${findGrade(topper.avgMarks)} \n \n A Graders: \n ------ \n Total Number of A+ graders: ${findAGradersCount(studentsData)} \n Name: ${aGradersNames} \n Total Marks: ${aGradersTotalMarks} \n ------ \n \n Class Average: \n ------ \n Total Mark s scored by the class: ${findTotalMarks(studentData)} \n Total Average of the class: ${findTotalMarks(studentData) / studentData.length} \n ------ \n Total Average of Chemistry: ${calculateSubjectAverage(studentData, "chemistry")} \n Total Average of Home Science: ${calculateSubjectAverage(studentData, "homeScience")} \n Total Average of Commerce: ${calculateSubjectAverage(studentData, "commerce")} \n Total Average of Physical Education: ${calculateSubjectAverage(studentData, "physicalEducation")} \n Total Average of Moral Science: ${calculateSubjectAverage(studentData, "moralScience")}`)
}

generateClassReport(studentsData);