const createMessage = ({ items, quantity }) => {
    console.log(`You have ${quantity} ${items}${quantity > 1 ? "s" : ""}`);
};
createMessage({ items: "apple", quantity: 3 });
createMessage({ items: "apple", quantity: 1 });

const generateUrl = (endpoint, params) => {
    return `https://api.example.com/${endpoint}?${params}`;
};
console.log(generateUrl("users", "page+1&limit=10"));