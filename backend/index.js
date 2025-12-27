require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;
const {MessageModel} = require("./model/MessageModel")

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Backend running");
});

app.post("https://portfolio-u0tl.onrender.com/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    const newMessage = new MessageModel({
        name,
        email,
        message,
    });

    await newMessage.save();

    res.status(201).json({
        message: "Message received successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`App started at port: ${PORT}`);

    mongoose
        .connect(uri)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error(err));
});
