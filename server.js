require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


app.use("/api/auth", require("./routes/authRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.json({
        message: "Authentication API Running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});