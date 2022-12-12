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
    state = {
        nameOfSpis: ""
    };
    ChangeInput = (event) => {
        this.setState({nameOfSpis: event.target.value});
        let s1 = document.querySelector(".favorites__name");
        let s2 = document.querySelector(".favorites__save");
        if(s1.value.length !== 0){
            s2.style.backgroundColor = "#496DDB";
        }
        if(s1.value.length === 0){
            s2.style.backgroundColor="gray";
        }
    }
    render() { 
        return (
            <div className="favorites">
                <input value={this.state.nameOfSpis} className="favorites__name" onChange={this.ChangeInput} placeholder="Введите название списка" disabled={!this.props.favorite.length} required/>
                <ul className="favorites__list">
                    {this.props.favorite.map((item) => {
                        return <div className='remove-div'> <li key={item.imdbID}>
                           {item.Title} ({item.Year}) </li> <button className='remove-favorite' onClick={() => this.props.removeFromFavorite(item.imdbID)}>X</button> </div>;
                    })}
                </ul>
                <button type="button" className="favorites__save" disabled={!this.props.favorite.length}>Сохранить список</button>
            </div>
        );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);