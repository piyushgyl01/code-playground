const { count } = require("console");

console.log("A5.12_HW2")
console.log("---- ---- ----")

const productsData = [
    {
        id: 101,
        name: "Laptop",
        price: 999.99,
        brand: "Dell",
        category: "Electronics",
        rating: 4.5
    },
    {
        id: 102,
        name: "Smartphone",
        price: 599.99,
        brand: "Samsung",
        category: "Electronics",
        rating: 4.0
    },
    {
        id: 103,
        name: "Running Shoes",
        price: 79.99,
        brand: "Nike",
        category: "Footwear",
        rating: 4.8
    },
    {
        id: 104,
        name: "T-shirt",
        price: 19.99,
        brand: "Adidas",
        category: "Apparel",
        rating: 4.2
    },
    {
        id: 105,
        name: "Coffee Maker",
        price: 49.99,
        brand: "Hamilton",
        category: "Kitchen Appliances",
        rating: 4.6
    }
];

function findExpensiestProduct(productsData) {
    let expensiestProduct = productsData[0];
    for (let i = 1; i < productsData.length; i++) {
        if (productsData[i].price > expensiestProduct.price) {
            expensiestProduct = productsData[i];
        }
    }
    return expensiestProduct;
}

function totalElectronicsProducts(productsData) {
    let count = 0
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i].category === "Electronics") {
            count = count + 1;
        }
    }
    return count;
}

function averagePrice(productsData) {
    let totalPrice = 0
    for (let i = 0; i < productsData.length; i++) {
        totalPrice = totalPrice + productsData[i].price
    }
    return totalPrice / productsData.length;
}

function averageRating(productsData) {
    let totalRating = 0
    for (let i = 0; i < productsData.length; i++) {
        totalRating = totalRating + productsData[i].rating
    }
    return totalRating / productsData.length;
}

function highestRatingProduct(productsData) {
    let highestRatingProduct = productsData[0];
    for (let i = 1; i < productsData.length; i++) {
        if (productsData[i].rating > highestRatingProduct.rating) {
            highestRatingProduct = productsData[i];
        }
    }
    return highestRatingProduct;
}

function productsLessThan50(productsData) {
    let productsLessThan50 = [];
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i].price <= 50) {
            productsLessThan50.push(productsData[i])
        }
    }
    return productsLessThan50;
}

console.log(productsLessThan50(productsData));

function printProductAnalysisReport(productsData) {
    let expensiestProduct = findExpensiestProduct(productsData);
    let mostRatedProduct = highestRatingProduct(productsData)
    let productLessThan50 = productsLessThan50(productsData);

    console.log(`====== Product Analysis ====== \n Most Expensive Product Details \n ------ \n Name: ${expensiestProduct.name} \n Price: ${expensiestProduct.price} \n Brand: ${expensiestProduct.brand} \n Category: ${expensiestProduct.category} \n Ratings: ${expensiestProduct.rating} \n ------ ------ ------ \n Totals and Averages \n ------ \n Total Electronics Products: ${totalElectronicsProducts(productsData)} \n Average Price: ${averagePrice(productsData)} \n Average Ratings: ${averageRating(productsData)} \n ---- ---- ---- \n Product with the highest rating \n ------ \n Name: ${mostRatedProduct.name} \n Price: ${mostRatedProduct.price} \n Brand: ${mostRatedProduct.brand} \n Category: ${mostRatedProduct.category} \n Ratings: ${mostRatedProduct.rating} \n ------ ------ ------ \n Products with price less than 50 \n ------ \n Name: ${productLessThan50[0].name} \n Price: ${productLessThan50[0].price} \n Brand: ${productLessThan50[0].brand} \n Category: ${productLessThan50[0].category} \n Ratings: ${productLessThan50[0].rating} \n ------ \n Name: ${productLessThan50[1].name} \n Price: ${productLessThan50[1].price} \n Brand: ${productLessThan50[1].brand} \n Category: ${productLessThan50[1].category} \n Ratings: ${productLessThan50[1].rating} \n ------`)
}

printProductAnalysisReport(productsData);