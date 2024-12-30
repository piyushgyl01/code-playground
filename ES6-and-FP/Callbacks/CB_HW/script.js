const getUserName = (username, callback) => {
    let message = `Good Morning ${username}! What do you want to get done today?`;
    return callback(message);
};

const greetUser = (message) => {
    console.log(message);
}

getUserName("John", greetUser)

const calculateAge = (birthYear, callback) => {
    let age = `${new Date().getFullYear() - birthYear}`;
    return callback(age)
};

const displayAge = (age) => {
    console.log(`You are ${age} years`);
};

calculateAge(2004, displayAge)

const generateUsername = (firstName, callback) => {
    const username = firstName + "_user";
    return callback(username);
};

const displayUsername = (username) => {
    console.log(`Your username is: ${username}`);
};

generateUsername("eheh", displayUsername)

const checkTemperature = (temp, callback) => {
    const fahrenheit = (temp * 9/5) + 32;
    callback(fahrenheit);
};

const displayTemperatureMessage = (fahrenheit) => {
    if (fahrenheit > 86) {
        console.log(`The temperature is ${fahrenheit}°F: It's Hot.`);
    } else if (fahrenheit >= 50 && fahrenheit <= 86) {
        console.log(`The temperature is ${fahrenheit}°F: It's Moderate.`);
    } else {
        console.log(`The temperature is ${fahrenheit}°F: It's Cold.`);
    };    
};

checkTemperature(25, displayTemperatureMessage);

const processArray = (numbers, callback) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(callback(numbers[i]));
    }
    console.log(result);
}

const squareNumber = (num) => {
    return num * num;
}

const numbersArrays = [1, 2, 3, 4, 5];
processArray(numbersArrays, squareNumber);

const processArrays = (numbers, callback) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(callback(numbers[i]));
    }
    console.log(result);
}

const doubleNumber = (num) => num * 2;


const numbersArray = [2, 4, 6, 8, 10]; 
processArrays(numbersArray, doubleNumber);