const data = [
    { key: "name", value: "John" },
    { key: "age", value: 25 },
    { key: "city", value: "London" }
  ];
  
const transformedData = data.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
}, {});
console.log(transformedData);

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray);

const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "John", grade: "C" }
  ];
  
const grades = students.reduce((acc, curr) => {
    acc.push(curr.grade)
    return acc
}, []);
console.log(grades);