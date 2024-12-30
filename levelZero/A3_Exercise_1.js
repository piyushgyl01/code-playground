console.log("A3_Exercise_1")
console.log("------------------------")
console.log("Sales Performance Report")
console.log("------------------------")

let rahulSalesTarget = 100
let priyaSalesTarget = 200
let amitSalesTarget = 150
let rahulActualSales = 85
let priyaActualSales = 180
let amitActualSales = 120

let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100
let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100

let rahulPerformanceLevel = ""
let rahulBonusAmount = 0
if (rahulSalesPercentage >= 90) {
    rahulPerformanceLevel = "High Performer"
    rahulBonusAmount = rahulActualSales * 0.2
} else if (rahulSalesPercentage >= 70) {
    rahulPerformanceLevel = "Average Performer"
    rahulBonusAmount = rahulActualSales * 0.1
} else {
    rahulSalesPercentage = "Low Perfomer"
    rahulBonusAmount = 0
} 

let priyaPerformanceLevel = ""
let priyaBonusAmount = 0
if (priyaSalesPercentage >= 90) {
    priyaPerformanceLevel = "High Performer"
    priyaBonusAmount = priyaActualSales * 0.2
} else if (priyaSalesPercentage >= 70) {
    priyaPerformanceLevel = "Average Performer"
    priyaBonusAmount = priyaActualSales * 0.1
} else {
    priyaSalesPercentage = "Low Perfomer"
    priyaBonusAmount = 0
} 

let amitPerformanceLevel = ""
let amitBonusAmount = 0
if (amitSalesPercentage >= 90) {
    amitPerformanceLevel = "High Performer"
    amitBonusAmount = amitActualSales * 0.2
} else if (amitSalesPercentage >= 70) {
    amitPerformanceLevel = "Average Performer"
    amitBonusAmount = amitActualSales * 0.1
} else {
    amitSalesPercentage = "Low Perfomer"
    amitBonusAmount = 0
} 

console.log("Rahul")
console.log("Sales Target: ", rahulSalesTarget, "units")
console.log("Units Sold: ", rahulActualSales, "units")
console.log("Sales Percentages: " + rahulSalesPercentage + "%")
console.log("Performance: ", rahulPerformanceLevel)
console.log("Bonus Amount: ", rahulBonusAmount, "units")
console.log("")

console.log("Rahul")
console.log("Sales Target: ", priyaSalesTarget, "units")
console.log("Units Sold: ", priyaActualSales, "units")
console.log("Sales Percentages: " + priyaSalesPercentage + "%")
console.log("Performance: ", priyaPerformanceLevel)
console.log("Bonus Amount: ", priyaBonusAmount, "units")
console.log("")

console.log("Rahul")
console.log("Sales Target: ", amitSalesTarget, "units")
console.log("Units Sold: ", amitActualSales, "units")
console.log("Sales Percentages: " + amitSalesPercentage + "%")
console.log("Performance: ", amitPerformanceLevel)
console.log("Bonus Amount: ", amitBonusAmount, "units")

