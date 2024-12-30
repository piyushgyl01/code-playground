console.log("A5_Excercise_2");
console.log("---- ---- ----")
console.log("1.1");
console.log("---- ---- ----")

const employees = [
    {
        name: "Rajesh Kumar",
        department: "Marketing",
        hourlySalary: 250,
        hoursWeek1: 40,
        hoursWeek2: 42,
        hoursWeek3: 38,
        hoursWeek4: 39,
        bonusMultiplier: 65
    },
    {
        name: "Priya Gupta",
        department: "Sales",
        hourlySalary: 220,
        hoursWeek1: 38,
        hoursWeek2: 40,
        hoursWeek3: 37,
        hoursWeek4: 41,
        bonusMultiplier: 50
    },
    {
        name: "Ankit Sharma",
        department: "Finance",
        hourlySalary: 280,
        hoursWeek1: 35,
        hoursWeek2: 36,
        hoursWeek3: 39,
        hoursWeek4: 38,
        bonusMultiplier: 80
    },
    {
        name: "Ritu Singh",
        department: "Operations",
        hourlySalary: 300,
        hoursWeek1: 42,
        hoursWeek2: 41,
        hoursWeek3: 43,
        hoursWeek4: 40,
        bonusMultiplier: 45
    },
    {
        name: "Rahul Verma",
        department: "IT",
        hourlySalary: 260,
        hoursWeek1: 37,
        hoursWeek2: 39,
        hoursWeek3: 38,
        hoursWeek4: 36,
        bonusMultiplier: 70
    }
];

console.log(employees);

console.log("---- ---- ----")
console.log("1.2");
console.log("---- ---- ----")

function totalHoursWorked(employees, employeeName) {
    let totalHoursWorked = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employeeName === employees[i].name) {
            totalHoursWorked = employees[i].hoursWeek1 + employees[i].hoursWeek2 + employees[i].hoursWeek3 + employees[i].hoursWeek4;
        }
    }
    return totalHoursWorked;
}

function bonus(employees, employeeName) {
    let bonus = 0;
    let employeeHoursWorked = totalHoursWorked(employees, employeeName);
    // let bonusMultiplier = [65, 50, 80, 45, 70];
    let requiredWorkingHours = 40 * 4;

    for (let i = 0; i < employees.length; i++) {
        if (employeeName === employees[i].name) {
            if (employeeHoursWorked > requiredWorkingHours) {
                bonus = ((employeeHoursWorked - requiredWorkingHours) * employees[i].hourlySalary) * employees[i].bonusMultiplier / 100;
            } else {
                bonus = 0;
            }
        }
    }
    return bonus;
}

// function salary(employees, employeeName) {
//     let salary = 0;
//     let totalHoursWorked = totalHoursWorked(employees, employeeName)

//     for (let i = 0; i > employees.length; i++) {
//         if (employeeName === employees[i].name) {
//             salary = ( employeeName[i].hourlySalary * totalHoursWorked);
//         }
//     }
//     return salary;
// }

function totalSalary(employees, employeeName) {
    let salary = 0;
    let employeeHoursWorked = totalHoursWorked(employees, employeeName);
    for (let i = 0; i < employees.length; i++) {
        if (employeeName === employees[i].name) {
            salary = employeeHoursWorked * employees[i].hourlySalary;
        }
    }
    return salary;
}


for (let i = 0; i < employees.length; i++) {
    employees[i].salary = totalSalary(employees, employees[i].name);
    employees[i].bonus = bonus(employees, employees[i].name);
    employees[i].totalHoursWork = totalHoursWorked(employees, employees[i].name)
    
    console.log(employees[i])
}

console.log("---- ---- ----");
console.log("1.3");
console.log("---- ---- ----");

function printEmployeePayslip(employees) {
    console.log("==== Pay Slip ====")
    for (let i = 0; i < employees.length; i++) {
        console.log(`Name: ${employees[i].name}
Department: ${employees[i].department}
Total Hours Worked: ${employees[i].totalHoursWork}
Total Salary: ${employees[i].salary}
Bonus: ${employees[i].bonus}
------
        `)
    }
}

printEmployeePayslip(employees);


console.log("---- ---- ----")
console.log("1.4");
console.log("---- ---- ----")

function highestPayingEmployee(employees) {
    let highestPayingEmployee = employees[0];
    for (let i = 1; i < employees.length; i++) {
        if (highestPayingEmployee.hourlySalary < employees[i].hourlySalary) {
            highestPayingEmployee = employees[i];
        }
    }
    return highestPayingEmployee;
}

function totalHours(employees) {
    let hours = 0;
    for (let i = 0; i < employees.length; i++) {
        hours = hours + employees[i].totalHoursWork;
    }
    return hours
}

function averageHours(employees) {
    let totalHoursWork = totalHours(employees);
    return totalHoursWork / employees.length;
}

function weeklyAverageHours(employees, week) {
    let sum = 0;
    for (let i = 0; i < employees.length; i++) {
        sum = sum + employees[i][week];
    }
    return sum / employees.length;
}

function printHrReport(employees) {
    let mostPaid = highestPayingEmployee(employees);
    
    console.log(`====== Human Resource Report ======
        ------
        Most Paid Employee
        ------
        Name: ${mostPaid.name}
        Department: ${mostPaid.department}
        Total Hours Worked: ${mostPaid.totalHoursWork}
        Total Salary: ${mostPaid.salary}

        ------
        Company Average
        ------
        Total Hours worked by all: ${totalHours(employees)}
        Total Average Hours of the company: ${averageHours(employees)}
        ------
        Total Average of Week 1: ${weeklyAverageHours(employees, "hoursWeek1")}
        Total Average of Week 2: ${weeklyAverageHours(employees, "hoursWeek2")}
        Total Average of Week 3: ${weeklyAverageHours(employees, "hoursWeek3")}
        Total Average of Week 4: ${weeklyAverageHours(employees, "hoursWeek4")}
        `)
}

printHrReport(employees);