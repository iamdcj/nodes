const express = require("express");

const app = express();

app.get("", ({ res }) => {
  res.send("Welcome.");
});

app.get("/about", ({ res }) => {
  res.send("<h1>About Page</h1>");
});

app.get("/weather", ({ res }) => {
  res.send("<h1>Weather</h1>");
});

app.get("/health-check", ({ res }) => {
  res.send(
    "In Heaven Everything is fine. You got your good things. And I've got mine."
  );
});

app.get("/help", ({ res }) => {
  res.send("What is the problem?");
});

app.listen(1919, () => {
  console.log("Coming to you from 1919");
});
