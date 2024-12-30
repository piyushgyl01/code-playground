console.log("A5.10_HW2");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

const foodTracker = [
    {
        Day: "Monday",
        Breakfast: 300,
        Lunch: 300,
        Snacks: 150,
        Dinner: 500,
    },
    {
        Day: "Tuesday",
        Breakfast: 250,
        Lunch: 450,
        Snacks: 200,
        Dinner: 550
    }, 
    {
        Day: "Wednesday",
        Breakfast: 350,
        Lunch: 550,
        Snacks: 100,
        Dinner: 700
    },
    {
        Day: "Thursday",
        Breakfast: 400,
        Lunch: 600,
        Snacks: 180,
        Dinner: 650
    },
    {
        Day: "Friday",
        Breakfast: 280,
        Lunch: 480,
        Snacks: 120,
        Dinner: 580
    },
    {
        Day: "Saturday",
        Breakfast: 320,
        Lunch: 520,
        Snacks: 160,
        Dinner: 620
    }
]

for (let i = 0; i < foodTracker.length; i++) {
    console.log(`Day: ${foodTracker[i].Day} \n Breakfast: ${foodTracker[i].Breakfast} \n Lunch: ${foodTracker[i].Lunch} \n Snacks: ${foodTracker[i].Snacks} \n Dinner: ${foodTracker[i].Dinner} \n`)
}


console.log("---- ---- ----");
console.log("1.2")

const midAfternoonCalories = [100, 120, 105, 110, 100, 130];
for (let i = 0; i < foodTracker.length; i++) {
    foodTracker[i].midAfternoonCalories = midAfternoonCalories[i]
    console.log(foodTracker)
}

console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

console.log("2.1");

const sundayData = {
    Day: "Sunday",
    Breakfast: 370,
    Lunch: 430,
    Snacks: 140,
    Dinner: 530,
    midAfternoonCalories: 150
}

console.log(sundayData);

console.log("---- ---- ----");
console.log("2.2");

foodTracker.push(sundayData);

console.log("---- ---- ----");
console.log("2.3");

for (let i = 0; i < foodTracker.length; i++) {
    foodTracker[i].totalCalorie = foodTracker[i].Breakfast + foodTracker[i].Dinner + foodTracker[i].Lunch + foodTracker[i].Snacks + foodTracker[i].midAfternoonCalories
    console.log("Array with total calories: ", foodTracker);
}

console.log("---- ---- ----");
console.log("2.3");

for (let i = 0; i < foodTracker.length; i++) {
    foodTracker[i].avgColorie = foodTracker[i].totalCalorie / 5;
    console.log("Array with average calories: ", foodTracker);
}

console.log("---- ---- ----");
console.log("Excercise 3");
console.log("---- ---- ----");

for (let i = 0; i < foodTracker.length; i++) {
    if (foodTracker[i].totalCalorie <= 1550) {
        foodTracker[i].comment = "Your calorie intake was within limits.";
    } else {
        foodTracker[i].comment = "Your calorie intake was higher than recommended.";
    }

    console.log(`==== Calorie Card for ${foodTracker[i].Day} ==== \n Breakfast: ${foodTracker[i].Breakfast} \n Lunch: ${foodTracker[i].Lunch} \n Snacks: ${foodTracker[i].Snacks} \n Dinner: ${foodTracker[i].Dinner} \n Mid Afternoon: ${foodTracker[i].midAfternoonCalories} \n ------ \n Total: ${foodTracker[i].totalCalorie} \n Average: ${foodTracker[i].avgColorie} \n Comment: ${foodTracker[i].comment} \n ----- ----- ----- ----- \n`)
}