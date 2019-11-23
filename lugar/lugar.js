const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBnhv1N2mRvzNfgP-K3vb5XKfx0dz0Ggfs`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    } else if (resp.data.status === 'REQUEST_DENIED') {
        return {
            direccion: 'San José, Costa Rica',
            lat: '9.9280694',
            lng: '-84.0907246'
        }
        //Este return es estàtico debido a que google no permitiò utilizar su api no se porque y mme pedìa facturaciòn. Estan dementes jaja
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }


};

module.exports = {
    getLugarLatLng
}