function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = 'Loading...';
  
    const location = locationInput.value;
    const apiKey = '139ccc3b9d7780e8775390bbdfe63292'; // Replace this with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404' || data.message) {
          weatherInfoDiv.innerHTML = `<p>Error: Location not found. Please check your input.</p>`;
        } else {
          const temperature = data.main.temp;
          const locationName = data.name;
          weatherInfoDiv.innerHTML = `<p>The temperature in ${locationName} is ${temperature}°C</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
      });
  }
  