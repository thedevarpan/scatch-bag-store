const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path")
const db = require('./config/mongoose-connection');

const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// $env:DEBUG="development:mongoose"; npx nodemon app.js
app.listen(3000);