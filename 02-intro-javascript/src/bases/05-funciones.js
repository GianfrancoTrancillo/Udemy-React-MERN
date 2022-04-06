// NO CREAR FUNCIONES ASI PORQUE ES FACIL SOBREESCRIBIRLAS
// function saludar(nombre) {
//     return `Hola, ${ nombre }`;
// }




// const saludar = function (nombre) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 =  (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 =  (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'El_papi1502',
    });

const getUsuarioActivo = (nombre)=> ({
    uid: 'abscds',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );