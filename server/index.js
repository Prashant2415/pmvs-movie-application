const express = require("express");
const mysql = require("mysql2");
require("./connection");
const cors = require("cors");
const port = 8081;

const app = express();
const router = require("./route");
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log("Running server");
})