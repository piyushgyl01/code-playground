const { title } = require("process");

console.log("A5.9_HW2");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pages: 650
}

function printBookDetails(book) {
    console.log("1.1")
    if (book.pages >= 500) {
        console.log(`The book, ${book.title} is long`)
    } else {
        console.log(`The book, ${book.title} is not long`)
    }

    console.log("1.2");
    book.cover = "Hard Cover";
    console.log(`The book, ${book.title} has ${book.cover}`);

    console.log("1.3");
    if (book.cover === "Hard Cover" && book.pages > 30) {
        console.log(`The book, ${book.title} is heavy`)
    } else {
        console.log(`The book, ${book.title} is not heavy`)
    }
}

printBookDetails(book);

console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

const weatherData = {
    city: "Tokyo",
    temperature: 28,
    humidity: 70,
    weatherCondition: "Partly Condition"
}

function printWeatherData(weatherData) {
    console.log("2.1")
    console.log(weatherData)

    console.log("2.2")
    let newWeatherData = {...weatherData};
    console.log(`Is the newWeatherData is same as weatherData? ${weatherData === newWeatherData}`);
    
    console.log("2.3")
    if (newWeatherData.humidity > 65) {
        newWeatherData.weatherCondition = "cloudy";
    } else {
        newWeatherData = "Partly condition";
    }
    console.log(newWeatherData);
}

printWeatherData(weatherData);

console.log("---- ---- ----");
console.log("Excercise 3");
console.log("---- ---- ----");

let book1 = {
    title: "To Kill a Mocking Bird",
    pages: 281
}

let book2 = {
    title: "1984",
    pages: 328
}

function compareFunc(book1,book2) {
    if (book1.pages > book2.pages) {
        return true;
    } else {
        return false;
    }
}

console.log(`Does ${book1.title} has more pages than ${book2.title}: ${compareFunc(book1, book2)}`);

console.log("---- ---- ----");
console.log("Excercise 4");
console.log("---- ---- ----");

bookOne = {
    title: "Animal Farm",
    author: "George Orwell",
    numberOfPages: 140
}

bookTwo = {
    title: "Coming Up for Air",
    author: "George Orwell",
    numberOfPages: 210
}
function compareBooks(bookOne, bookTwo) {
    console.log("4.1");
    console.log(bookOne);
    console.log(bookTwo);

    console.log("4.2");
    if (bookOne.numberOfPages > bookTwo.numberOfPages) {
        console.log(`${bookOne.title} is thicker than ${bookTwo.title}`)
    } else {
        console.log(`${bookTwo.title} is thicker than ${bookOne.title}`)
    }

    console.log("4.3");
    if (bookOne.author === bookTwo.author) {
        console.log(`Both books are written by the same authors, ${bookOne.author}`)
    } else {
        console.log(`Both books are written by the different authors`)
    }
}

compareBooks(bookOne, bookTwo)