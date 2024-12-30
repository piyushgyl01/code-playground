console.log("A4.3_HW");

console.log("--- --- ---");
console.log("Excercise 1");
console.log("--- --- ---");

let day1Burnt = 400;
let day1Intake = 1500;
let day2Burnt = 450;
let day2Intake = 1800;
let day3Burnt = 300;
let day3Intake = 1600;
let day4Burnt = 500;
let day4Intake = 2000;

let baseCalorieBurn = 1500;


function calculateSurplusDeficit(day, dayBurnt, dayIntake, baseCalorieBurn) {
    let surplus = dayBurnt - (dayIntake + baseCalorieBurn);
    let status = "";
    if (surplus >= 0) {
        status = "surplus";
    } else {
        status = "deficit";
    }
    console.log(`${day}: ${status}: ${surplus}`);
    // return surplus;
}

calculateSurplusDeficit("Day 1", day1Burnt, day1Intake, baseCalorieBurn);
calculateSurplusDeficit("Day 2", day2Burnt, day2Intake, baseCalorieBurn);
calculateSurplusDeficit("Day 3", day3Burnt, day3Intake, baseCalorieBurn);
(calculateSurplusDeficit("Day 4", day4Burnt, day4Intake, baseCalorieBurn));

console.log("--- --- ---");
console.log("Excercise 2");
console.log("--- --- ---");

function totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt) {
    return day1Burnt + day2Burnt + day3Burnt + day4Burnt;
}

console.log("Total Calories Burnt: " + totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt));

console.log("--- --- ---");
console.log("Excercise 3");
console.log("--- --- ---");

function totalIntake(day1Intake, day2Intake, day3Intake, day4Intake) {
    return day1Intake + day2Intake + day3Intake + day4Intake;
}

console.log("Total Calories Intake: " + totalIntake(day1Intake, day2Intake, day3Intake, day4Intake));

console.log("--- --- ---");
console.log("Excercise 4");
console.log("--- --- ---");

function totalSurplus(totalBurnt, totalIntake, baseCalorieBurn) {
    return totalBurnt - (totalIntake + (4 * baseCalorieBurn));
}

console.log("Total Surplus/Deficit: " + totalSurplus(totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt), totalIntake(day1Intake, day2Intake, day3Intake, day4Intake), baseCalorieBurn));

console.log("--- --- ---");
console.log("Excercise 5");
console.log("--- --- ---");

function generateWeeklySummary(totalBurnt, totalIntake, totalSurplus) {
    let standingGoalAward = "";
    if (totalBurnt >= 1000) {
        standingGoalAward = "Congratulations! You have kept moving thoughout. Keep it up!";
    } else {
        standingGoalAward = "No award yet";
    }

    return "Weekly Summary:" + "\n" + "Total Calories Burnt: " + totalBurnt + "\n" + "Total Calories Intake: " + totalIntake + "\n" + "Total Surplus/Deficit: " + totalSurplus + "\n" + "" + "Standing Goal Award: " + standingGoalAward;
}

console.log(generateWeeklySummary(totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt), totalIntake(day1Intake, day2Intake, day3Intake, day4Intake), totalSurplus(totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt), totalIntake(day1Intake, day2Intake, day3Intake, day4Intake), baseCalorieBurn)));