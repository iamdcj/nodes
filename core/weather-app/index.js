const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const { geocode } = require("./services/geocode");
const { returnWeather } = require("./services/weather");

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

app.get("/api/weather", (req, res) => {
  const { query } = req;

  geocode(query.q, (error, data) => {
    if (error || !data) {
      return res.status(400).render("home", {
        title: "Weather App | Home",
        pageTitle: "Welcome",
        content: error,
      });
    }

    const { text, coordinates } = data;

    returnWeather(coordinates, (error, data) => {
      if (error || !data) {
        return res.status(400).render("home", {
          title: "Weather App | Home",
          pageTitle: "Welcome",
          content: error,
        });
      }

      res.json({
        ...data,
        text
      });
    });
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
