import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise( (resolve, reject) =>{
//     setTimeout(() => {
        
//         const heroe = getHeroeById(2);
            // resolve(p1);
            // reject('No se pudo encontrar el heroe');

//         console.log(heroe);
//     }, 2000);
// });

// promesa.then( () =>{
//     console.log('Then de la promesa');
// });


const getHeroeByIdAsync = ( id ) =>{
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            
            const heroe = getHeroeById( id );
            if (heroe === undefined) {
                reject("No se pudo encontrar");
            } else {
                resolve(heroe);
            }
    
            console.log(heroe);
        }, 2000);
    });
}

getHeroeByIdAsync(10)
.then(console.log)
.catch(console.warn);