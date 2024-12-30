console.log("A5_Excercise_1");
console.log("---- ---- ----")
console.log("1.1");
console.log("---- ---- ----")

const salesData = [
    {
        name: "Rajesh",
        location: "Mumbai",
        Q1Sales: 120000,
        Q2Sales: 145000,
        Q3Sales: 130000,
        Q4Sales: 155000
    },
    {
        name: "Sneha",
        location: "Delhi",
        Q1Sales: 90000,
        Q2Sales: 110000,
        Q3Sales: 95000,
        Q4Sales: 120000
    },
    {
        name: "Arun",
        location: "Chennai",
        Q1Sales: 100000,
        Q2Sales: 125000,
        Q3Sales: 115000,
        Q4Sales: 135000
    },
    {
        name: "Kavita",
        location: "Kolkata",
        Q1Sales: 85000,
        Q2Sales: 95000,
        Q3Sales: 88000,
        Q4Sales: 105000
    },
    {
        name: "Sanjay",
        location: "Mumbai",
        Q1Sales: 110000,
        Q2Sales: 135000,
        Q3Sales: 120000,
        Q4Sales: 140000
    },
    {
        name: "Divya",
        location: "Chennai",
        Q1Sales: 95000,
        Q2Sales: 120000,
        Q3Sales: 110000,
        Q4Sales: 130000
    }
];

console.log(salesData);

for (let i = 0; i < salesData.length; i++) {
    salesData[i].totalSales = salesData[i].Q1Sales + salesData[i].Q2Sales + salesData[i].Q3Sales + salesData[i].Q4Sales;
}

for (let i = 0; i < salesData.length; i++) {
    salesData[i].averageSales = (salesData[i].Q1Sales + salesData[i].Q2Sales + salesData[i].Q3Sales + salesData[i].Q4Sales) / 4;
}

console.log(salesData);

console.log("---- ---- ----");
console.log("1.2");
console.log("---- ---- ----");

for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].averageSales >= 140000) {
        salesData[i].performanceGrade = "Top Performer";
    } else if (salesData[i].averageSales >= 120000 && salesData[i].averageSales < 140000) {
        salesData[i].performanceGrade = "Medium Performer";
    } else {
        salesData[i].performanceGrade = "Low Performer";
    }
}

function generatePerformanceReport(salesData) {
    console.log("==== Peformance Report ====")
    for (let i = 0; i < salesData.length; i++) {
        console.log(`Name: ${salesData[i].name}
Location: ${salesData[i].location}
Total Sales: ${salesData[i].totalSales}
Average Sales: ${salesData[i].averageSales}
Performance Grade: ${salesData[i].performanceGrade}
------
        `)
    }
}

generatePerformanceReport(salesData);

console.log("---- ---- ----")
console.log("1.3");
console.log("---- ---- ----")

function findBestPerformer(salesData) {
    let highestTotalSales = salesData[0]
    for (let i = 1; i < salesData.length; i++) {
        if (salesData[i].totalSales > highestTotalSales) {
            highestTotalSales = salesData[i];
        }
    }
    return highestTotalSales;
}

function findTopPerformer(salesData) {
    let topPerformer = [];
    let count = 0;
    for (let i = 0; i < salesData.length; i++) {
        if (salesData[i].averageSales >= 140000) {
            topPerformer.push(salesData[i])
            count ++;
        }
    }
    return count;
}

function avgQSales(salesData, q) {
    let sum = 0;
    for (let i = 0; i < salesData.length; i++) {
        sum = sum + salesData[i][q];
    }
    return sum / salesData.length;
}

function totalSales(salesData) {
    let sum = 0;
    for (let i = 0; i < salesData.length; i++) {
        sum = sum + salesData[i].totalSales;
    }
    return sum;
}

function totalAvgSales(salesData) {
    let totalAvgSales = totalSales(salesData) / salesData.length;
    return totalAvgSales;
}

function generateAnnualReport(salesData) {
    let highestTotalSales = findBestPerformer(salesData);
    let topPerformer = findTopPerformer(salesData)

    console.log(`===== Annual Sales Report =====
        -----
        Best Peformer
        ------
        Name: ${highestTotalSales.name}
        Location: ${highestTotalSales.location}
        Total Sales by the best performer: ${highestTotalSales.totalSales}

        -----
        Top Performers
        -----
        Total No. of Top Perfomers; ${topPerformer}

        -----
        Sales Averges
        -----
        Q1 Average Sales: ${avgQSales(salesData, "Q1Sales")}
        Q2 Average Sales: ${avgQSales(salesData, "Q2Sales")}
        Q3 Average Sales: ${avgQSales(salesData, "Q3Sales")}
        Q4 Average Sales: ${avgQSales(salesData, "Q4Sales")}

        ------
        Total Sales: ${totalSales(salesData)}
        Total Average Sales: ${totalAvgSales(salesData)}
        `)
}

generateAnnualReport(salesData);