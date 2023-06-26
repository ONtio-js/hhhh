const express = require('express');
const {database} = require('./Config/database');
require('dotenv').config();
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,database(DATABASE_URL))
