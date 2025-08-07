async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'c3e27da8a7247c90dc5ed10188740bde'; // Get it from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('weatherResult').innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌤 Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById('weatherResult').innerText = 'City not found!';
  }
}
