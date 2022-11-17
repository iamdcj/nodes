const express = require("express");
const path = require("path")
const { doc } = require("./document");

const app = express();
const public = path.join(__dirname, './public')

app.use(express.static(public))

app.get("", ({ res }) => {
  res.send(doc("<h1>Welcome</h1>", "Weather App | Home"));
});

app.get("/about", ({ res }) => {
  res.send(doc("<h1>About Page</h1>", "Weather App | About"));
});

app.get("/weather", ({ res }) => {
  res.json({ location: "New York", forecast: "Shite" });
});

app.get("/health-check", ({ res }) => {
  res.send(
    doc(
      "<p>In Heaven Everything is fine. You got your good things. And I've got mine.</p>"
    )
  );
});

app.get("/help", ({ res }) => {
  res.send(doc("<h1>Help</h1>"));
});

app.listen(1919, () => {
  console.log("Coming to you from 1919");
});
