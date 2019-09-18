const express = require ('express');

const port = 8080;
const app = express();

const pizzas = [
    {
        id: 1,
        name: "tandori hot",
        size: "12 inch",
        spicy: true
    },
    {
        id: 2,
        name: "veggie",
        size: "20 inch",
        spicy: false
    },
];

app.get('/pizzas', (req, resp) => {
console.log('returning pizzas');
resp.setHeader('Content-Type', 'application/json');
resp.send(pizzas);
});

console.log(`Server listenting on ${port}`);
app.listen(port);



