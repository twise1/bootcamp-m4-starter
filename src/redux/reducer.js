const initialState = {
    movies: [],
    title: "",
    favorite: [],
    favoriteID: "",
    listPage: []
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
            favoriteID: action.payload.favoriteID
        }
    };
    if(action.type === "MAKE_LIST") {
        return{
            ...state,
            listPage: action.payload.data
        }
    }
    return state;
}
export default reducer;