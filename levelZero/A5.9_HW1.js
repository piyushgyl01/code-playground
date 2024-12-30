console.log("A5.9_HW1");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

const citizen = {
    name: "Ajay",
    age: 72,
    city: "Indore"
}

console.log("1.1");

if (citizen.age >= 60) {
    console.log(`${citizen.name} is a senior citizen.`)
} else {
    console.log(`${citizen.name} is not a senior citizen.`)
}

console.log("---- ---- ----");
console.log("1.2");

citizen.sugarLevel = "Normal"
console.log(`Sugar level for ${citizen.name} is ${citizen.sugarLevel}`)

console.log("---- ---- ----");
console.log("1.3")

if (citizen.age >= 60 && citizen.sugarLevel === "Normal") {
    console.log(`${citizen.name} is fit for travel.`)
} else {
    console.log(`${citizen.name} is not fit for travel.`)
}

console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

const movie = {
    name: "MI 7",
    duration: 150,
    isReleased: false
}

function releaseMovie(movie) {
    console.log("2.1");
    console.log(movie);

    console.log("2.2");
    newMovie = {...movie};
    console.log(`Is the newMovie same as movie? ${newMovie === movie}`) 

    console.log("2.3")
    if (newMovie.duration > 120) {
        newMovie.isReleased = true;
    } else {
        newMovie.isReleased = false;
    }
    console.log(newMovie);
}

releaseMovie(movie);

console.log("---- ---- ----");
console.log("Excercise 3");
console.log("---- ---- ----");

const movie1 = {
    title: "The Lost City",
    duration: 120
}

const movie2 = {
    title: "Murder Mystery 2",
    duration: 110
}

function randomFunction(movie1, movie2) {
    if (movie1.duration > movie2.duration) {
        return true;
    } else {
        return false;
    }
}

console.log(`is ${movie1.title} longer than ${movie2.title}? ${randomFunction(movie1, movie2)}`)

console.log("---- ---- ----");
console.log("Excercise 4");
console.log("---- ---- ----");

const student = {
    name: "Priya",
    age: 14,
    marks: 45
}

function printStudentDetails(student) {
    console.log("4.1");
    console.log(student);

    console.log("4.2")
    if (student.marks < 60) {
        student.isTopPerformer = false; 
    } else {
        student.isTopPerformer = true;
    }
    console.log(student.isTopPerformer);

    console.log("4.3")
    if (student.marks < 60 && student.marks >= 40) {
        student.grade = "D";
    } else {
        student.grade = "E";
    }
    console.log(student);
}

printStudentDetails(student);