import React, { Component } from 'react';
import './Favorites.css';
import {connect} from "react-redux";
import { removeFromFavorite } from '../../redux/action';

const mapStateToProps = (state) => {
    console.log(state.favorite)
    return {
        favorite: state.favorite
    };
}
const mapDispatchToProps = (dispatch) => ({
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id))
})

class Favorites extends Component {
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favorite.map((item) => {
                        return <div className='remove-div'> <li key={item.imdbID}>
                           {item.Title} ({item.Year}) </li> <button className='remove-favorite' onClick={() => this.props.removeFromFavorite(item.imdbID)}>X</button> </div>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);