const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d9f804f4d4f9b86b6a87356ce2692551`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}