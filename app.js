const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8800;

const morgan = require("morgan");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/view/layouts");

// middleware
app.use(morgan("dev"));
app.use(express.static("public"));

// routes
app.get("/", (_, res) => res.render("index", { title: "Welcome" }));

// start
app.listen(port, () => console.log(`Listening on port ${port}`));
