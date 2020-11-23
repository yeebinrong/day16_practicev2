// load libraries
const express = require('express');
const cors = require('cors');

// create an instance of express
const app = express();

// use cors
app.use(cors());
app.use(express.json());

app.get('/', (req, resp) => {
    resp.status(200);
    resp.type('application/json');
})

// configure env variables
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// start server
app.listen(PORT, () => {
    console.info(`Application is listening ${PORT} on ${new Date()}.`);
})