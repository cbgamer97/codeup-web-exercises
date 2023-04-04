import * as movieUtils from './movies.js'

(async()=>{

    document.querySelector('button').addEventListener('click', async function(){
        const title =document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            title,
            genre,
            rating
        }
        let result = await movieUtils.setFavorite(movieData);
        console.log(result);

    })

    let body = {
        "rating": 2
    }

    let response = await movieUtils.patchFavorite(3, body);

    await movieUtils.deleteFavorite(2);


})();