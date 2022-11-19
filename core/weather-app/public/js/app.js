"use strict";

(function () {
  const _doc = document.documentElement;
  const _notice = document.querySelector(".weather-notice");
  const _error = document.querySelector(".site-error");

  const renderWeather = (data) => {
    const { temperature, feelslike, text } = data;

    _notice.innerHTML = `In ${text} it is ${temperature}°F but feels like ${feelslike}°F`;
  };

  const renderLoader = (shouldRender) => {
    if (shouldRender) {
      _doc.classList.add("is--loading");
    } else {
      _doc.classList.remove("is--loading");
    }
  };

  const renderError = (shouldRender, message) => {
    if (shouldRender) {
      _error.innerHTML = message;
      _doc.classList.add("did--error");

      setTimeout(() => {
        renderError(false);
      }, 5000);
    } else {
      _doc.classList.remove("did--error");
    }
  };

  const fetchWeather = async (event) => {
    event.preventDefault();

    renderError(false);
    renderLoader(true);

    const formData = new FormData(event.target);

    const location = formData.get("weather-input");

    try {
      const req = await fetch(`api/wather?q=${location}`);

      const data = await req.json();

      renderWeather(data);
    } catch (error) {
      renderError(true, error.message);
      console.error(error);
    }

    renderLoader(false);
  };

  const form = document.querySelector(".weather-form");

  form.addEventListener("submit", fetchWeather);
})();
