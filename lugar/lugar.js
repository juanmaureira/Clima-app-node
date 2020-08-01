const axios = require('axios');

const getLugarLatLon = async( direccion ) =>{

    const encodeURL = encodeURI(direccion);
    
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&apikey=ab29656d4112690959590a9095ae350a`
      });
    
    
    const resp = await instance.get()

      if( resp.data.cod === 404 ){
          throw new error (`No hay resultados para ${direccion}`)
      }

      const dir = resp.data.name;
      const lat = resp.data.coord.lat;
      const lon = resp.data.coord.lon;

    return {
        dir,
        lat,
        lon
    }
}

module.exports={
    getLugarLatLon
}
