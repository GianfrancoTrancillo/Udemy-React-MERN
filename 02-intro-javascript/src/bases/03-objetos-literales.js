const persona = {
    nombre: 'Leo',
    apellido: 'Messi',
    edad: 34,
    direccion: {
        ciudad: 'Paris',
        zip: 5555,
        lat: 14.3567,
        lng: 56.365687,
    }

};


const persona2 = { ...persona };
persona2.nombre = 'Lionel';

console.log(persona); 
console.log(persona2);