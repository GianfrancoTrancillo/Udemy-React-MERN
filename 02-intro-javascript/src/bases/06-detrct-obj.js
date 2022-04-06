const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
    // console.log(nombre, edad, rango )

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2562,
            lng: 12.6522
        } 

    }
};

const { nombreClave, anios, latlng:{ lat, lng } } =useContext (persona); 
console.log(nombreClave, anios);
console.log(lat, lng);



