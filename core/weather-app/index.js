const request = require("postman-request");

require("dotenv").config();

const returnWeather = (city, [lon = -73.959894, lat = 40.789624]) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}&units=f`;

  console.log(url);
  return request({ url, json: true }, (error, response, data) => {
    if (error) {
      throw new Error(error?.message || "Something went wrong");
    }

    console.log();
    const { temperature, feelslike, ...rest } = data.current;

    console.log(
      `In ${city} it is currently ${temperature} degrees out, but it feels like ${feelslike} degrees`
    );
  });
};

const returnCoords = (address = "brooklyn") => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`;

  return request({ url, json: true }, (error, response, { features }) => {
    if (error) {
      throw new Error(error?.message || "Something went wrong");
    }

    returnWeather(features[0].text, features[0].geometry.coordinates);
  });
};

returnCoords();
