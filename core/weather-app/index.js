const request = require("postman-request");

require("dotenv").config();

const returnWeather = (coords) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${coords}&units=f`;
  

  return request({ url, json: true }, (error, response, { current }) => {
    if (error) {
      throw new Error(error?.message || "Something went wrong");
    }

    const { temperature, feelslike, ...rest } = current;


    console.log(
      `It is currently ${temperature} degrees out, but it feels like ${feelslike} degrees`
    );
  });
};

const returnCoords = (address = "manhattan") => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`;

  return request({ url, json: true }, (error, response, { features }) => {
    if (error) {
      throw new Error(error?.message || "Something went wrong");
    }

    returnWeather(features[0].geometry.coordinates);
  });
};

returnCoords();
