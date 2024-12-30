const employeeList = document.querySelector("#employeeList");
const plusFiveYearsExpCheckbox = document.querySelector("#plusFiveYearsExpCheckbox");

const employeeData = [
    {
      ID: 1,
      Name: "Alice",
      Experience: 2
    },
    {
      ID: 2,
      Name: "Bob",
      Experience: 9
    },
    {
      ID: 3,
      Name: "Charlie",
      Experience: 4
    },
    {
      ID: 4,
      Name: "John",
      Experience: 19
    }
];
  
const renderEmployeeData = (filterOnlyLessThanFive) => {
    const filteredEmployee = filterOnlyLessThanFive ? employeeData.filter((employee) => employee.Experience > 5) : employeeData;

    const employeeListHTML = filteredEmployee.map((employee) => `
        <li>
            <strong>ID:</strong> ${employee.ID} <br>
            <strong>Name:</strong> ${employee.Name} <br>
            <strong>Experience:</strong> ${employee.Experience} Years<br>
        </li>
        <hr>
    `);
    employeeList.innerHTML = employeeListHTML.join("");
}

renderEmployeeData(false);
plusFiveYearsExpCheckbox.addEventListener("click", function() {
    renderEmployeeData(plusFiveYearsExpCheckbox.checked)
})