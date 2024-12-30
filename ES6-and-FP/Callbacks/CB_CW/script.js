// function greetUser(username, callback) {
//     let message = `Good Morning ${username}!`
//     callback(message)
// };

// function logMessage(message) {
//     console.log(message);
// };

// greetUser("Alice", logMessage)

const greetUser = (username, callback) => {
    let message = `Good Morning ${username}!`;
    callback(message);
}

const logMessage = (message) => {
    console.log(message);
}
greetUser("Alice", logMessage)