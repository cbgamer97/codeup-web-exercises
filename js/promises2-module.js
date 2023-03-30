export const getStarWarsPlanets = async(id = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${id}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getStarWarsCharacters = async(id) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${id}/`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getEyeColor = async (id) => {
    try {
        let character = await getCharacter(id);
        return character.eye_color;
    } catch (error){
        console.log(error);
    }
}

export const getMovie = async(id) => {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${id}/`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};