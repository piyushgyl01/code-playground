console.log("A4 Assignment");

console.log("--- --- ---");
console.log("Excercise 1");
console.log("--- --- ---");

let product1 = "Laptop";
let price1 = 999;
let category1 = "Electronics";
let product2 = "Running Shoes";
let price2 = 799;
let category2 = "Footwear";
let product3 = "T-shirt";
let price3 = 199;
let category3 = "Clothing";

function getTotalPrice(price1, price2, price3) {
    return price1 + price2 + price3;
}

console.log("Total Price: " + getTotalPrice(price1, price2, price3));

console.log("--- --- ---");
console.log("Excercise 2");
console.log("--- --- ---");

let discount = 0.1;

function calculateDiscount(discount, price2) {
    return price2 = price2 - (price2 * discount);
}

let updatedPrice = calculateDiscount(discount, price2);
console.log("Updated Price: " + updatedPrice)

// console.log("Final Total Price: " + getTotalPrice(price1, updatedPrice, price3));

console.log("--- --- ---");
console.log("Excercise 3");
console.log("--- --- ---");

function cartSummary(product, price, discount, finalPrice) {
    return "Product : " + product + "\n" + "Price of the product: " + "$" + price + "\n" + "Dicount: " + discount + "\n" + `Final price of ${product}: ` + "$" +  finalPrice;
}
console.log("====== Cart Summary ======");
console.log("");

console.log(cartSummary(product1, price1, discount, updatedPrice))
console.log("");

console.log(cartSummary(product2, price2, 0, price2))
console.log("");

console.log(cartSummary(product3, price3, 0, price3))
console.log("");

console.log("Total Cart Price: " + "$" + getTotalPrice(price1, updatedPrice, price3))