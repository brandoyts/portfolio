const bodyParser = require("body-parser");
const path = require("path");
const mailer = require("./utils/mailer");
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        cvPath: path.join(__dirname, "assets", "dummy.pdf")
    });
});

app.post("/", mailer);

app.get("/my-cv", (req, res) => {
    fs.readFile(path.join(__dirname, "assets", "dummy.pdf"), (err, data) => {
        res.contentType("application/pdf").send(data);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
