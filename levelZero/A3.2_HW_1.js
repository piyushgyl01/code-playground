console.log("A3.2_HW_1")
console.log("---- ---- ----")

console.log("1.1")
let number = 25

if (number > 0) {
    console.log("The number is posituve.")
} else if (number < 0) {
    console.log("The number is negative.")
} else {
    console.log("The number is zero")
}

console.log("---- ---- ----")

console.log("1.2")
let athlete1 = "Ravi"
let athlete2 = "Priya"
let athlete3 = "Amit"

let time1 = 10.5
let time2 = 11.2
let time3 = 10.8

if (athlete1 > athlete2 && athlete1 > athlete3) {
    console.log(athlete1, "is the fastest athlete in running")
} else if (athlete2 > athlete1 && athlete2 > athlete3) {
    console.log(athlete2, "is the fastest athlete in running")
} else if (athlete3 > athlete2 && athlete3 > athlete1) {
    console.log(athlete3, "is the fastest athlete in running")
} else {
    console.log("Two or more athletes have the same fastest running time")
}