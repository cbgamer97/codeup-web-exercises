export const setFavorite = async (movie) => {
    try {
        let url = `http://localhost:3000/favorites`;
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const patchFavorite = async (id, movie) => {
    try {
        if (!id) {
            throw new Error('You must provide an id')
        }
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            method: "PATCH",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteFavorite = async (id) => {
    try {
        if (!id) {
            throw new Error('You must provide an id')
        }
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            method: "DELETE",
            header: {
                'Content-Type': 'application/json'
            }
        };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getFavorites = async () =>{
    try {
        let url = `http://localhost:3000/favorites/`;
        let options = {
            header: {
                'Content-Type': 'application/json'
            }
        };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getFavorite = async () => {
    try {
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            method: "PATCH",
            header: {
                'Content-Type': 'application/json'
            }
        };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const searchFavorite = async (movie) => {
    let favorites = await getFavorites();
    if (movie.title) {
        let favorite = favorites.find((result) => {
            return movie.title === result.title;
        });
        if (favorite) {
            return favorite;
        } else {
            return 'No movie was found with that title.';
        }
    } else if (movie.genre) {
        let favoritesFiltered = favorites.filter((result) => {
            return movie.genre === result.genre;
        });
        if (favoritesFiltered.length > 0) {
            return favoritesFiltered;
        } else {
            return 'No movie was found with that genre.';
        }
    }
};