console.log("A5.10_HW1");
console.log("---- ---- ----");
console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1")

const playersData = [
    {
        name: "Virat",
        edenGarden: 72,
        wankhedeStadium: 88,
        ferozShahKotla: 45,
        chepauk: 74
    },
    {
        name: "Rohit",
        edenGarden: 64,
        wankhedeStadium: 41,
        ferozShahKotla: 68,
        chepauk: 34
    },
    {
        name: "Shikhar",
        edenGarden: 54,
        wankhedeStadium: 38,
        ferozShahKotla: 72,
        chepauk: 44
    },
    {
        name: "Rishabh",
        edenGarden: 22,
        wankhedeStadium: 27,
        ferozShahKotla: 34,
        chepauk: 51
    }
]
console.log("1.1");
for (let i = 0; i < playersData.length; i++) {
    console.log(` Cricketer: ${playersData[i].name} \n Eden Gardens: ${playersData[i].edenGarden} \n Wankhede: ${playersData[i].wankhedeStadium} \n Feroz Shah Kotla: ${playersData[i].ferozShahKotla} \n Chepauk: ${playersData[i].chepauk}`)
    console.log("");
}

let chinnaswamyStadium = [54, 82, 49, 45];

console.log("---- ---- ----");
console.log("1.2")

for (let i = 0; playersData.length > i; i++) {
    playersData[i].chinnaswamyStadium = chinnaswamyStadium[i];
    console.log(playersData[i]);
}


console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

console.log("2.1");

const rahulData = {
    name: "KL Rahul",
    edenGarden: 34,
    wankhedeStadium: 56,
    ferozShahKotla: 42,
    chepauk: 31,
    chinnaswamyStadium: 68
}

console.log(rahulData);

console.log("---- ---- ----");
console.log("2.2");

playersData.push(rahulData);
console.log([playersData]);

console.log("---- ---- ----");
console.log("2.3");

for (let i = 0; i < playersData.length; i++) {
    playersData[i].totalScore = playersData[i].chepauk + playersData[i].edenGarden + playersData[i].ferozShahKotla + playersData[i].wankhedeStadium + playersData[i].chinnaswamyStadium;
    console.log(playersData[i]);
}

console.log("---- ---- ----");
console.log("2.4");

for (let i = 0; i < playersData.length; i++) {
    playersData[i].average = playersData[i].totalScore / 5;
    console.log(playersData[i])
}

console.log("---- ---- ----");
console.log("Excercise 3");
console.log("---- ---- ----");

for (let i = 0; playersData.length > i; i++) {
    if (playersData[i].average >= 80) {
        playersData[i].performance = "Good";
    } else if (playersData[i].average >= 60 && playersData[i].average <= 79) {
        playersData[i].performance = "Above Average";
    } else if (playersData[i].average >= 45 && playersData[i].average <= 59) {
        playersData[i].performance = "Average";
    } else {
        playersData[i].performance = "bad";
    }
    console.log(`==== Score Card for ${playersData[i].name} \n Eden Gardens: ${playersData[i].edenGarden} \n Wankhede Stadium: ${playersData[i].wankhedeStadium} \n Feroz Shah Kotla: ${playersData[i].ferozShahKotla} \n Chepauk: ${playersData[i].chepauk} \n Chinnaswamy Stadium: ${playersData[i].chinnaswamyStadium} \n ---- \n Total: ${playersData[i].totalScore} \n Average: ${playersData[i].average} \n Peformance: ${playersData[i].performance} \n`)
}