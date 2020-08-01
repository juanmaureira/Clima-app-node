const axios = require('axios');

const getClima = async ( lat, lon ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ab29656d4112690959590a9095ae350a&units=metric`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}