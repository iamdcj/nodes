const { geocode } = require("../services/geocode");
const { returnWeather } = require("../services/weather");

const weatherByLocation = (location, callback) => {
  geocode(location, (error, data) => {
    if (error || !data) {
      throw new Error(error);
    }

    const { text, coordinates } = data;

    console.log(data);

    returnWeather(coordinates, (error, data) => {
      if (error || !data) {
        throw new Error(error);
      }

      console.log(data);

      callback({
        ...data,
        text,
      });
    });
  });
};

module.exports = { weatherByLocation };
