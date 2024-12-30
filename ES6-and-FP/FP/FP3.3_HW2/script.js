const items = [

    {id: 1, item: "Item 1", price: 10},
  
    {id: 2, item: "Item 2", price: 20},
  
    {id: 3, item: "Item 3", price: 15},
  
    {id: 4, item: "Item 4", price: 25}
  
];

const itemListContainer = document.querySelector("#itemList");
const totalCostContainer = document.querySelector("#totalCost");
const averageCostContainer = document.querySelector("#averageCost");

const itemList = items.reduce((accumulator, currentValue) => {
    accumulator.totalCost = accumulator.totalCost + currentValue.price;

    const listItem = document.createElement("li");
    listItem.textContent = `${currentValue.item} - ${currentValue.price}`;
    itemListContainer.appendChild(listItem);

    return accumulator
}, {totalCost: 0});

const totalCost = itemList.totalCost;
totalCostContainer.textContent = `$${totalCost}`;

const averageCost = itemList.totalCost / items.length;
averageCostContainer.textContent = `$${averageCost}`;