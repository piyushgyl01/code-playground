const restExample = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
}

restExample(1, 2, 3, 4, 5, 6);

const concatenateStrings = (...strings) => console.log(strings.join(" "));
console.log("Hello", "World");
console.log("JS", "is", "fun");

const countArgs = (...args) => console.log(args.length);
console.log(countArgs(1, 2, "Hello", "World"));
console.log(countArgs("Good", "Job"));