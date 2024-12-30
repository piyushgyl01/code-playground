const displayWeather = (city, weather) => `The weather in ${city} is ${weather} degrees Celsius`;
console.log(displayWeather("New York", 20));
console.log(displayWeather("London", 15));

const formatCurrency = (amount, currency) => `You have ${amount} ${currency}`;
console.log(formatCurrency(50.5, "USD"));
console.log(formatCurrency(100, "EUR"));

const displayBookSummary = (title, author, genre) => `The book "${title}" written by ${author} belongs to ${genre} genre.`;
console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"));

const displayMovieInfo = (title, year, director) => `The movie "${title}" was released in ${year} and directed by ${director}.`;
console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"));

const constructEmail = (recipient, subject) => `To: ${recipient}
Subject: ${subject}

Dear ${recipient},

...`;
console.log(constructEmail("alice@example.com", "Meeting Reminder"));

const assessGrade = (score) => `${score >= 60 ? "You are passing." : "You are failing."}`;
console.log(assessGrade(75));
console.log(assessGrade(60)); 
console.log(assessGrade(45)); 

const showMessage = (item, count) => `You have ${count} ${item}${count > 1 ? "s" : ""}.`;
console.log(showMessage("bangle", 10));
console.log(showMessage("lipstick", 1));

const assessMarks = (score, grade) => `${score >= 60 && grade === "A" ? "You are passing" : "You are failing."};`
console.log(assessMarks(95, "A"));  
console.log(assessMarks(62, "C"));  
console.log(assessMarks(45, "D")); 

const showMsg = (item1, count1, item2, count2) => {
    return `${count1 > 10 & count2 > 5 ? "You have a good collection." : "You need to update your collection."}`;
};
console.log(showMsg("bangle", 11, "lipstick", 6));
console.log(showMsg("bangle", 5, "lipstick", 1));
console.log(showMsg("bangle", 12, "lipstick", 4)); 

const shareStationeryMessage = (pencils, erasers) => {
    return `${(pencils > 10 && erasers > 5) || (erasers > 10 && pencils > 5) ? "Please share stationery with friends." : "Please ask your friends for stationery."}`;
};
console.log(shareStationeryMessage(12, 8)); 
console.log(shareStationeryMessage(7, 15)); 
console.log(shareStationeryMessage(5, 3));