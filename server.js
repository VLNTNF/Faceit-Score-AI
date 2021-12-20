'use strict'
const express = require('express');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());

server.listen(PORT, () => console.log(`Service running on Port ${PORT}`));
server.post('/', (req, res) => {
  var date = new Date().toLocaleString();
  console.log('\n\n\n---------------------\n\n\n' + date + '\n\n');
  console.log(req);
  res.sendStatus(200);
});
