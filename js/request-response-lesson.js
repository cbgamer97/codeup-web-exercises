//TRADITIONAL PROMISE METHOD

// function getMovie(movie = 1) {
//     return fetch(`https://swapi.dev/api/films/${movie}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             return data;
//         }).catch(error => {
//         console.log(error);
//     });
// }
//
// getMovie().then(movie => {
//
// });

// ASYNC/AWAIT FUNCTION

// async function getMovieA(){
//     try {
//         let response = await fetch('https://swapi.dev/api/films/1/');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
//
// }

// const getMovieB = async (movie) =>{
//     try {
//         let response = await fetch(`https://swapi.dev/api/films/${movie}`)
//         let data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//     }
// }
//
// (async ()=>{
//     let newHope = await getMovieB(1);
//
// })();

const getCharacter = async (character = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${character}`);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

(async()=>{
    let skywalker = await getCharacter(1)
    console.log(skywalker.name);
    let secondCharacter = await getCharacter(10)
})();