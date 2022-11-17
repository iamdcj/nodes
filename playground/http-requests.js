const http = require("http");

const returnWeather = () => {
  const url =
    "http://api.weatherstack.com/current?access_key=d7574e0584ab81cfc7e37919e71a6161&query=40.652601,-73.949721&units=f";

  const request = http.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk.toString();
    });

    response.on("end", () => {
      console.log(JSON.parse(data));
    });
  });

  request.on("error", (error) => {
    console.log(error);
  });

  request.end();
};

returnWeather();
