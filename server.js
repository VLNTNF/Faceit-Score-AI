'use strict';
const bodyparser = require('body-parser');
const express = require('express');

const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Service running on Port ${PORT}`));
server.post('/', (request, response, data) => {
    console.log(data);
    console.log('\n\n\n\n\n\n')
});