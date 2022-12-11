export function favoriteMovie(id){
    return{
        type: "FAVORITE_MOVIE",
        payload: {
            id:id
        }
    };
};