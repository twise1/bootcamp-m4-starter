export function favoriteMovie(id){
    return{
        type: "FAVORITE_MOVIE",
        payload: {
            id:id
        }
    };
};
export function searchMovie(movies){
    return{
        type:"SEARCH_MOVIE",
        payload:{
            movies: movies
        }
    };
};
export function zaprosFilma(text){
    return function(dispatch){
        const apiKey="248fe4cd";
    fetch(`http://www.omdbapi.com/?s=${text}&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(searchMovie(data.Search));
        })
         .catch((err) => console.log(err));
    }
}
export function removeFromFavorite(id){
    return{
        type: "REMOVE_FROM_FAVORITE",
        payload:{
            id:id
        }
    };
} 