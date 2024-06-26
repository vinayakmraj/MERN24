const express = require("express");

const app = express();

const router = require("./router/auth");
app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.status(200).send("Hello, MERN");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is about Page");
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})