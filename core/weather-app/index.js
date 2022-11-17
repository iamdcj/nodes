const express = require("express");

const app = express();

app.get("", ({ res }) => {
  res.send("Welcome.");
});

app.get("/about", ({ res }) => {
  res.send("<h1>About Page</h1>");
});

app.get("/weather", ({ res }) => {
  res.json({ location: "New York", forecast: "Shite" });
});

app.get("/health-check", ({ res }) => {
  res.send(
    "In Heaven Everything is fine. You got your good things. And I've got mine."
  );
});

app.get("/help", ({ res }) => {
  res.send("What's up?");
});

app.listen(1919, () => {
  console.log("Coming to you from 1919");
});
