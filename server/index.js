const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const corsConfigs = require("./config/corsConfig");
require('./db/connection');
require("dotenv").config();
const PORT=8000

//app USE
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cors(corsConfigs));
app.use("/api", require("./routes/feedbackRoutes"));
//routes
app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(PORT,async ()=>{
    
    console.log(`Listening on port:${PORT}`);
})