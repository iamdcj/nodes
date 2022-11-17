const request = require("postman-request");

require("dotenv").config();

const geocode = (address = "brooklyn", callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`;

  request({ url, json: true }, (error, response, { features }) => {
    if (error || response.body.error || features.length < 1) {
      callback(
        error?.message ||
          response.body?.error?.info ||
          "Unable to retrieve location",
        null
      );
    }

    const { text, geometry } = features[0];

    callback(null, {
      text,
      coordinates: geometry?.coordinates,
    });
  });
};

module.exports = { geocode };
