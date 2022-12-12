import React, { Component } from 'react';
import './MovieItem.css';
import {favoriteMovie} from "../../redux/action";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    favoriteMovie : (id) => dispatch(favoriteMovie(id))
})
const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
}
class MovieItem extends Component {
    isFavoriteHasAnything = (imdbID) => {
        const isHas = this.props.favorite.find((item) => {
        return item.imdbID === imdbID;
        });
        console.log(isHas);
        if(isHas){
        return true
        }
        else{
        return false
        }
        }
    ButtonText = (imdbID) => {
        let text;
        if(this.isFavoriteHasAnything(imdbID)){
        text="✓ Добавлено ";
        }
        if(!this.isFavoriteHasAnything(imdbID)){
        text="Добавить в список";
    }
        return text;
    }
    render() {
        const {imdbID, Title, Year, Poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.props.favoriteMovie(imdbID)} disabled={this.isFavoriteHasAnything(imdbID)}>{this.ButtonText(imdbID)}</button>
                </div>
            </article>
        );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MovieItem);