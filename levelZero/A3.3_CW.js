console.log("A3.3_CW")
console.log("---- ---- ----")

console.log("Excercise 1")
let product1Stock = 50
let product2Stock = 20
let product3Stock = 10
let product4Stock = 0

let product1Status = ""

if (product1Stock >= 30) {
    product1Status = "In stock"
} else if (product1Stock >= 10 && product1Stock < 30) {
    product1Status = "Low Stock"
} else {
    product1Status = "Out of stock"
}

let product2Status = ""

if (product2Stock >= 30 ) {
    product2Status = "In stock"
} else if (product2Stock >= 10 && product2Stock < 30) {
    product2Status = "Low Stock"
} else {
    product2Status = "Out of stock"
}

let product3Status = ""

if (product3Stock > 30) {
    product3Status = "In stock"
} else if (product3Stock >= 10 && product3Stock < 30) {
    product3Status = "Low status"
} else {
    product3Status = "Out of stock"
}

product4Status = ""

if (product4Stock > 30) {
    product3Sproduct4Statustatus = "In stock"
} else if (product4Stock >= 10 && product4Stock < 30) {
    product4Status = "Low status"
} else {
    product4Status = "Out of stock"
}

console.log("Inventory Status Report")
console.log("-----------------------")
console.log("Product 1:", product1Status)
console.log("Product 2:", product2Status)
console.log("Product 3:", product3Status)
console.log("Product 4:", product4Status)