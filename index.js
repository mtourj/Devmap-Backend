require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Make endpoints here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})