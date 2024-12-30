console.log("A5.11_HW1")
console.log("---- ---- ----")

const productsData = [
    {
        id: 1, 
        productName: "Laptop", 
        price2021: 19999, 
        price2022: 18999, 
        price2023: 15090, 
        brand: "Dell", 
        productRating: 5
    },
    {
        id: 2, 
        productName: "Smartphone", 
        price2021: 18999, 
        price2022: 17999, 
        price2023: 16999, 
        brand: "Samsung", 
        productRating: 4
    },
    {
        id: 3, 
        productName: "Smartwatch", 
        price2021: 36999, 
        price2022: 32999, 
        price2023: 29999, 
        brand: "Apple", 
        productRating: 4
    }
];

console.log("1.1");
console. log("---- ---- ----")

function getProductDetails(id) {
    let product = getProductDetailsByID(id);
    console.log(`===== Details Card for ${product.productName} ===== \n ID. : ${product.id} \n ----- \n Details: \n ----- \n Product Name: ${product.productName} \n Price in 2021: ${product.price2021} \n Price in 2022: ${product.price2022} \n Price in 2023: ${product.price2023} \n Brand: ${product.brand} \n Rating: ${product.productRating} \n ------ ------ ------ \n`);
}

function getProductDetailsByID(id) {
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i].id === id) {
            return productsData[i];
        }
    }
}

getProductDetails(1);

getProductDetails(2);

getProductDetails(3);

console.log("---- ---- ----")
console.log("1.2");
console.log("---- ---- ----")

function returnProductGreaterPrice(yearPrice, minimumPrice) {
    let output = [];
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i][yearPrice] >= minimumPrice) {
            output.push(productsData[i])
        }
    }
    return output;
}

console.log("Prodcuts with greater price than minimun price in 2021", returnProductGreaterPrice("price2021", 25000))
console.log("Prodcuts with greater price than minimun price in 2023", returnProductGreaterPrice("price2023", 16000))

console.log("---- ---- ----")
console.log("1.3");
console.log("---- ---- ----")

for (let i = 0; productsData.length > i; i++) {
    let numOfYears = 3;
    productsData[i].totalPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023
    productsData[i].averagePrice = (productsData[i].totalPrice) / numOfYears;
}

function averagePriceCutoff(avgCuttOff) {
    for(let i = 0; productsData.length > i; i++) {
        if (productsData[i].averagePrice >= avgCuttOff) {
            console.log(`Average price of 3 years for ${productsData[i].productName} is ${productsData[i].averagePrice}`)
        }
    }
}

averagePriceCutoff(12000);

console. log("---- ---- ----")
console.log("1.4");
console. log("---- ---- ----")

function getHighestAveragePrice(data) {
    let highestAvgPrice = data[0].averagePrice;
    for (let i = 1; i < data.length; i++) {
        if (data[i].averagePrice > highestAvgPrice) {
            highestAvgPrice = data[i].averagePrice;
            console.log(data[i]);
        }
    }
    return highestAvgPrice;
}

console.log(`Prodcut with the highest average price: ${getHighestAveragePrice(productsData)}`)