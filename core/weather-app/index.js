const { geocode } = require("./geocode");
const { returnWeather } = require("./weather");

geocode("boston", (error, { text, coordinates }) => {
  try {
    if (error) {
      throw new Error(error);
    }

    returnWeather(text, coordinates);
  } catch (error) {
    console.log(error.message);
  }
});
