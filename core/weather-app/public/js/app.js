(function () {
  const renderWeather = (data) => {
    const { temperature, feelslike, text } = data;

    const notice = document.querySelector(".weather-notice");

    notice.innerHTML = `In ${text} it is ${temperature}°F but feels like ${feelslike}°F`;
  };

  const renderLoader = (shouldRender) => {
    const _doc = document.documentElement;

    if (shouldRender) {
      _doc.classList.add("is--loading");
    } else {
      _doc.classList.remove("is--loading");
    }
  };

  const fetchWeather = async (event) => {
    event.preventDefault();

    renderLoader(true);

    const formData = new FormData(event.target);

    const location = formData.get("weather-input");

    try {
      const req = await fetch(`api/weather?q=${location}`);

      const data = await req.json();

      renderWeather(data);

      renderLoader(false);
    } catch (error) {
      renderLoader(false);
      console.error(error);
    }
  };

  const form = document.querySelector(".weather-form");

  form.addEventListener("submit", fetchWeather);
})();
