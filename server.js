const express = require('express');

const app = express();

const port = process.env.PORT || 5000

const config = require('./config')

const { PORT } = config;

app.listen(port, () => console.log(`Server started on PORT ${port}`));