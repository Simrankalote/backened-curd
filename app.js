const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');


const app = express();
const dotenv = require('dotenv');
app.use(bodyParser.json());
app.use(cors());


const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

app.use('/', require('./routes/index'));

app.listen(3000);