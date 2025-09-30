const axios = require('axios');

const API_KEY = process.env.OPENWEATHER_API;

const city = process.argv[2] || 'Buenos Aires';

async function getWeather() {
    if (!API_KEY) {
        console.error('Error: No se encontró la variable de entorno OPENWEATHER_API');
        process.exit(1);
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        console.log(`Clima en ${city}: ${response.data.main.temp}°C - ${response.data.weather[0].description}`);
    } catch (error) {
        console.error('Error al obtener el clima:', error.message);
    }
}

getWeather();
