const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// route
server.get('/', (req, res) => {
    res.status(200);
});

//


server.listen(port, () => console.log(`Server started on port ${port}`));