const request = require("postman-request");

require("dotenv").config();

const returnWeather = ([lon, lat], callBack) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}&units=f`;

  request({ url, json: true }, (error, response, { current }) => {
    if (error || response.body.error || !current) {
      return callback(
        error?.message ||
          response.body?.error?.info ||
          "Unable to retrieve location",
        null
      );
    }

    callBack(null, current);
  });
};

module.exports = { returnWeather };
