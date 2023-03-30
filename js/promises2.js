import {getStarWarsPlanets, getStarWarsCharacters, getEyeColor, getMovie} from "./promises2-module.js";

// get a particular planet
(async ()=>{

    let planet = await getStarWarsPlanets();
    console.log(planet);

    let luke = await getStarWarsCharacters(1);
    console.log(luke);

    let film1 = await getMovie(1);
    console.log(film1)
})();