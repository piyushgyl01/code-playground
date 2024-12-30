const employees = [
    { id: 1, name: "Alice", position: "Developer" },
    { id: 2, name: "Bob", position: "Designer" },
    { id: 3, name: "Charlie", position: "Manager" },
    { id: 4, name: "David", position: "Tester" }
  ];
  

const employeeListDiv = document.querySelector("#employeeListDiv");

const employeeListHTMl = employees.map((employee) => `
  <div>
    <strong>ID:</strong>: ${employee.id} <br>
    <strong>Name:</strong>: ${employee.name} <br>
    <strong>Position:</strong>: ${employee.position} 
    <hr>
  </div>
`)
employeeListDiv.innerHTML = employeeListHTMl.join("");