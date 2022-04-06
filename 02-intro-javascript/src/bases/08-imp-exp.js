// import {heroes} from './data/heroes';

import heroes, { owners } from "../data/heroes";

console.log(owners);




// const getHeroeById = (id) =>{

//     return heroes.find((heroe) =>{
//         if (heroe.id === id){
//             return true
//         }
//     });
// };


export const getHeroeById = (id) =>{
    return heroes.find(( heroe ) => heroe.id === id);
};
 
console.log(getHeroeById(2));



export const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));