const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async( direccion ) => {
    try{
        const data = await lugar.getLugarLatLon( direccion );
        const temp = await clima.getClima(data.lat, data.lon);
        return `El clima de ${data.dir} es de ${temp}`;
    }catch (e){
        return `No se pudo determinar los datos de ${direccion}`;
    }

}

getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log)