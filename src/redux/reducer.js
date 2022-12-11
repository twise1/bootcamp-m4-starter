const initialState = {
    movies: [
    {
        imdbID: 'tt3896198',
        title: "Guardians of the Galaxy Vol. 2",
        year: 2017,
        poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
        imdbID: 'tt0068646',
        title: "The Godfather",
        year: 1972,
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }],
    title: "",
    favorite: []
};
function reducer(state=initialState,action){
    if(action.type === "FAVORITE_MOVIE") {
        let movies = state.movies.find((item) => item.imdbID === action.payload.id);
        let favorite = [...state.favorite,movies];
        return{
            ...state,
            favorite,
        };
    }
    return state;
}
export default reducer;