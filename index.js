const express = require('express');
const app = express();
const cors = require('cors');


const dotenv = require('dotenv').config();
const mongodbConfig = require('./dbConfig.js');


app.use(cors());
app.use(express.json());

app.use('/',require('./routes/TaskOpes.js'));

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})