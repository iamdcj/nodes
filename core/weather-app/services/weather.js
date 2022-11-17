const request = require("postman-request");

require("dotenv").config();

const returnWeather = (city, [lon = -73.959894, lat = 40.789624]) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}&units=f`;

  request({ url, json: true }, (error, response, data) => {
    if (error || response.body.error) {
      throw new Error(
        error?.message || response.body?.error?.info || "Something went wrong"
      );
    }

    const { temperature, feelslike, ...rest } = data.current;

    console.log(
      `In ${city} it is currently ${temperature} degrees out, but it feels like ${feelslike} degrees`
    );
  });
};

module.exports = { returnWeather };
