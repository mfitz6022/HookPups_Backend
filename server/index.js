require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require('./db.js');

app.use(express.json());