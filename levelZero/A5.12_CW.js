console.log("A5.12_CW")
console.log("---- ---- ----")

const studentsData = [
    {
        name: "Rahul",
        rollNo: 101,
        hindi: 80,
        english: 75,
        maths: 90,
        computers: 88,
        science: 82,
        totalMarks: 415,
        avgMarks: 83
    },
    {
        name: "Amit",
        rollNo: 102,
        hindi: 85,
        english: 70,
        maths: 95,
        computers: 92,
        science: 88,
        totalMarks: 420,
        avgMarks: 88
    },
    {
        name: "Priya",
        rollNo: 103,
        hindi: 78,
        english: 92,
        maths: 88,
        computers: 95,
        science: 90,
        totalMarks: 442,
        avgMarks: 88.4
    },
    {
        name: "Kaveri",
        rollNo: 104,
        hindi: 89,
        english: 95,
        maths: 96,
        computers: 98,
        science: 91,
        totalMarks: 469,
        avgMarks: 93.8
    }
]

function getTopper(data) {
    let highestTotalStudent = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].totalMarks > highestTotalStudent.totalMarks) {
            highestTotalStudent = data[i];
        }
    }
    return highestTotalStudent;
}

function getGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    if (avg >= 50) return "E";
    return "F";
}

function getAGradersCount(data) {
    let count = 0;
    for (let i = 0; data.length > i; i++) {
        if (data[i].avgMarks >= 90) {
            count = count + 1;
        }
    }
    return count;
}

function getTotalMarks(data) {
    let classTotalMarks = 0;
    for (let i = 0; i < data.length; i++) {
        classTotalMarks = classTotalMarks + data[i].totalMarks
    }
    return classTotalMarks;
}

function calculateSubjectAverage(data, subjectName) {
    let totalMarks = 0;
    for (let i = 0; studentsData.length > i; i++) {
        totalMarks = totalMarks + data[i][subjectName]
    }
    return totalMarks / data.length;
}

function generateClassReport(studentsData) {
    const topper = getTopper(studentsData);
    const aGradersNames = [];
    let aGradersTotalMarks = 0;

    for (let i = 0; i < studentsData.length; i++) {
        if (studentsData[i].avgMarks >= 90) {
            aGradersNames.push(studentsData[i].name)
            aGradersTotalMarks = aGradersTotalMarks + studentsData[i].totalMarks
        }
    }

    console.log(`====== CLASS PEFORMANCE REPORT ====== \n Topper: \n ------ \n Name: ${topper.name} \n Roll No. : ${topper.rollNo} \n Grade: ${getGrade(topper.avgMarks)} \n \n A Graders: ------ \n Total Number of A graders: ${getAGradersCount(studentsData)} \n Name: ${aGradersNames} \n Total Marks: ${aGradersTotalMarks} \n ------ \n \n Class Average: \n ------ \n Total Marks Scored by the class: ${getTotalMarks(studentsData)} \n Total Average of the class: ${getTotalMarks(studentsData) / studentsData.length} \n ------ \n Total Average of Hindi: ${calculateSubjectAverage(studentsData, "hindi")} \n Total Average of Maths: ${calculateSubjectAverage(studentsData, "maths")} \n Total Average of English: ${calculateSubjectAverage(studentsData, "english")} \n Total Average of Science: ${calculateSubjectAverage(studentsData, "science")} \n Total Average of Computers: ${calculateSubjectAverage(studentsData, "computers")}`)
}

generateClassReport(studentsData);
