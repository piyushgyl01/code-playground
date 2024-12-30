const printTemperature = ({ location, temperature }) => {
    console.log(`Location: ${location}, Temperature: ${temperature} degree celsius`);
};
printTemperature({ location: "London", temperature: 15 });
printTemperature( {location: "New York", temperature: 10});

const printFruit = ({ fruitName, fruitColor, inStock }) => {
    console.log(`Fruit Name: ${fruitName}, Fruit Color: ${ fruitColor}, Available: ${inStock}`);
};
printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true});
printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false});

const printStudentScores = ([studentName, ...scores]) => {
    console.log(`Student: ${studentName}, Scores: ${scores.join(", ")}`);
};
printStudentScores(["Alice", 90, 85, 95]);
printStudentScores(["Bob", 80, 75, 85]);

const printProductDetails = ({ name: productName, price: productPrice }) => {
    console.log((`Product: ${productName}, Price: ${productPrice}`));
};
printProductDetails( {name: "Laptop", price: 899} );
printProductDetails( {name: "Phone", price: 599} );

const printPersonDetails = ({ name: personName = "Anonymouse", age: personAge = "Unknown" } = {}) => {
    console.log(`Name: ${personName}, age: ${personAge}`);
};
printPersonDetails({ name: "John", age: 30});
printPersonDetails({});

const printCityPopulation = ([cityName, { population,  country }]) => {
    console.log(`City: ${cityName}, Popilation: ${population}, Country: ${country}`);
};
printCityPopulation(["New York", { population: 8623000, country: "USA"}]);
printCityPopulation(["Tokyo", { population: 37833000, country: "Japan"}]);

const printCarDetails = ([carName, { model, price }]) => {
    console.log(`Name: ${carName}, Model: ${model}, Price: ${price}`);
};
printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]);
printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]);
