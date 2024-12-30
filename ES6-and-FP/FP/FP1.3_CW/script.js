const products = [
    { id: 1, name: "Laptop", price: 19990 },
    { id: 2, name: "Smartphone", price: 29990 },
    { id: 3, name: "Headphone", price: 5990 },
    { id: 4, name: "Tablet", price: 9990 }
  ];

const productListingDiv = document.querySelector("#productList");

const productListHTML = products.map((product) => `
  <div>
    <strong>ID:</strong> ${product.id} <br>
    <strong>Name:</strong> ${product.name} <br>
    <strong>Price:</strong> ${product.price}
    <hr>
  </div>
`);

productListingDiv.innerHTML = productListHTML.join("")