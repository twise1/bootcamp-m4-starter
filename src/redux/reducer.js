const initialState = {
    movies: [
    {
        imdbID: 'tt3896198',
        Title: "Guardians of the Galaxy Vol. 2",
        Year: 2017,
        Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
        imdbID: 'tt0068646',
        Title: "The Godfather",
        Year: 1972,
        Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }],
    title: "",
    favorite: [],
    favoriteID: "",
};
function reducer(state=initialState,action){
    if(action.type === "FAVORITE_MOVIE") {
        let movies = state.movies.find((item) => item.imdbID === action.payload.id);
        console.log(movies);
        let favorite = [...state.favorite,movies];
        return{
            ...state,
            favorite,
        };
    }
    if(action.type === "SEARCH_MOVIE"){
        return{
            ...state,
            movies: action.payload.movies   
        };
    }
    if(action.type === "REMOVE_FROM_FAVORITE"){
        let newFavorite = state.favorite.filter((item) => item.imdbID !== action.payload.id);
        return{
            ...state,
            favorite: newFavorite
        };
    }
    if(action.type==="SAVE_FAVORITE"){
        return{
            ...state,
            favoriteID:action.payload.favoriteID
        }
    };
    return state;
}
export default reducer;