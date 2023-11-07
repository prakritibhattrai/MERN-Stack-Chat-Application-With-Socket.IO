const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const database = require('./config/database');
const userRoute = require('./routes/user.routes');
const errorHandler = require('./config/errorHandler')
app.use(express.json())
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern-chat-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("MongoDB connected successfully!");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000!");
});
app.use('/user', userRoute)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})