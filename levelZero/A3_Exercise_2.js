console.log("A3_Exercise_2")
console.log("------------------------")
console.log("")

let day1Burnt = 400
let day1Intake = 1500
let day2Burnt = 450
let day2Intake = 1800
let day3Burnt = 300
let day3Intake = 1600
let day4Burnt = 500
let day4Intake = 2000
let day5Burnt = 350
let day5Intake = 1700

baseCalorie = 1500

let day1surplusOrDeficitValue = (day1Burnt - (day1Intake + baseCalorie))
let day1SurplusOrDeficit = ""
if (day1surplusOrDeficitValue > 0) {
    day1SurplusOrDeficit = "Surplus"
} else {
    day1SurplusOrDeficit = "Deficit"
}

let day2surplusOrDeficitValue = (day2Burnt - (day2Intake + baseCalorie))
let day2SurplusOrDeficit = ""
if (day2surplusOrDeficitValue > 0) {
    day2SurplusOrDeficit = "Surplus"
} else {
    day2SurplusOrDeficit = "Deficit"
}

let day3surplusOrDeficitValue = (day3Burnt - (day3Intake + baseCalorie))
let day3SurplusOrDeficit = ""
if (day3surplusOrDeficitValue > 0) {
    day3SurplusOrDeficit = "Surplus"
} else {
    day3SurplusOrDeficit = "Deficit"
}

let day4surplusOrDeficitValue = (day4Burnt - (day4Intake + baseCalorie))
let day4SurplusOrDeficit = ""
if (day4surplusOrDeficitValue > 0) {
    day4SurplusOrDeficit = "Surplus"
} else {
    day4SurplusOrDeficit = "Deficit"
}

let day5surplusOrDeficitValue = (day5Burnt - (day5Intake + baseCalorie))
let day5SurplusOrDeficit = ""
if (day5surplusOrDeficitValue > 0) {
    day5SurplusOrDeficit = "Surplus"
} else {
    day5SurplusOrDeficit = "Deficit"
}

console.log("Daily Reports")
console.log("Day 1: Deficit: "+ day1surplusOrDeficitValue + " (" + day1SurplusOrDeficit + ")")
console.log("Day 2: Deficit: "+ day2surplusOrDeficitValue + " (" + day2SurplusOrDeficit + ")")
console.log("Day 3: Deficit: "+ day3surplusOrDeficitValue + " (" + day3SurplusOrDeficit + ")")
console.log("Day 4: Deficit: "+ day4surplusOrDeficitValue + " (" + day4SurplusOrDeficit + ")")
console.log("Day 5: Deficit: "+ day5surplusOrDeficitValue + " (" + day5SurplusOrDeficit + ")")
console.log("")

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake

let totalSurplusOrDeficitValue = (totalBurnt - (totalIntake + (baseCalorie * 5)))
let totalSurplusOrDeficit = ""

if (totalSurplusOrDeficitValue > 0) {
    totalSurplusOrDeficit = "Surplus"
} else {
    totalSurplusOrDeficit = "Deficit"
}

let standingGoalAwards = ""
if (totalBurnt > 1000) {
    standingGoalAwards = "Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!"
} else {
    standingGoalAwards = "No Award yet"
}

console.log("Weekly Reports")
console.log("Total Calories Burnt:", totalBurnt, "calories")
console.log("Total Calories Intake:", totalIntake, "calories")
console.log("Total Surplus/Deficit:", totalSurplusOrDeficitValue, "calories")
console.log("")

console.log("Awards")
console.log("Standing Goal Award:", standingGoalAwards)