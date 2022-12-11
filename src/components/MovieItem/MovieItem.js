import React, { Component } from 'react';
import './MovieItem.css';
import {favoriteMovie} from "../../redux/action";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    favoriteMovie : (id) => dispatch(favoriteMovie(id))
})
// const mapStateToProps = (state) => {
//     return {
//         favorite: state.favorite
//     }
// }
class MovieItem extends Component {
    render() {
        const {id, title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.props.favoriteMovie(id)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default connect(null,mapDispatchToProps)(MovieItem);