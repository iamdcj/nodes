const express = require("express");
const path = require("path");
const { doc } = require("./document");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "./templates/layouts"),
    partialsDir: path.join(__dirname, "./templates/partials"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));

app.get("/health-check", ({ res }) => {
  res.send(
    "<p>In Heaven Everything is fine. You got your good things. And I've got mine.</p>"
  );
});

app.get("", ({ res }) => {
  res.render("home", {
    title: "Weather App | Home",
    pageTitle: "Welcome",
  });
});

app.get("*", ({ res }) => {
  res.render("404", {
    title: "Weather App | Home",
  });
});

app.listen(1919, () => {
  console.log("Coming to you from 1919");
});
