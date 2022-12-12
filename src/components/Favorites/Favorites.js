import React, { Component } from 'react';
import './Favorites.css';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    console.log(state.favorite)
    return {
        favorite: state.favorite
    };
}

class Favorites extends Component {
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.favorite.map((item) => {
                        return <li key={item.imdbID}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default connect(mapStateToProps)(Favorites);