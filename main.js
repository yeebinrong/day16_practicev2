// load libraries
const express = require('express');
const cors = require('cors');

// create an instance of express
const app = express();

// configure env variables
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

const cart = [
    {id:"abc", name:"apple", quantity:2},
    {id:"def", name:"banana", quantity:4},
    {id:"ghi", name:"pear", quantity:6},
    {id:"klz", name:"carrot", quantity:8},
]

// use cors
app.use(cors());
app.use(express.json());

//Routes
// GET "/cart"
app.get('/cart', (req, resp) => {
    resp.status(200);
    resp.type('application/json');
    resp.send(cart);
})

// GET "/cart/:id"
app.get('/cart/:id', (req, resp) => {
    const id = req.params.id;
    const item = cart.find(i => i.id == id);
    if (item === undefined) {
        resp.status(404);
        resp.json({});
        return;
    }
    resp.status(200);
    resp.type('application/json');
    resp.send(item);
})

// PUT "/cart/:id"
app.put('/cart/:id', (req, resp) => {
    const id = req.params.id;
    const payload = req.body;
    const idx = cart.findIndex(i => i.id == id);
    if (idx < 0) {
        cart.push(payload);
    } else {
        cart[idx] = payload;
    }
    resp.status(200);
    resp.type('application/json');
    resp.send({});
})

// POST "/cart/:id"
app.post('/cart/:id', (req, resp) => {
    const id = req.params.id;
    const payload = req.body;
    const idx = cart.findIndex(i => i.id == id);
    if (idx < 0) {
        cart.push(payload);
    } else {
        cart[idx] = payload;
    }
    resp.status(200);
    resp.type('application/json');
    resp.send({});
})

// start server
app.listen(PORT, () => {
    console.info(`Application is listening ${PORT} on ${new Date()}.`);
})