import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';
import {connect} from "react-redux";
import { removeFromFavorite , saveZapros} from '../../redux/action';

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite,
        favoriteID: state.favoriteID,
    };
}
const mapDispatchToProps = (dispatch) => ({
    removeFromFavorite: (id) => dispatch(removeFromFavorite(id)),
    saveZapros: (nameOfSpis,massivOfFavoriteID) => dispatch(saveZapros(nameOfSpis,massivOfFavoriteID)),    
});

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
    toMakeMassiv = () => {
        // let massivOfFavoriteID = this.props.favorite.map((item) => {
        //     return item.imdbID;
        // })
        return this.state.favorite;
    }
    ButtonClick = (event) => {
        this.props.saveZapros(this.state.nameOfSpis, this.props.favorite);
        
        document.querySelector('.favorites__save').textContent = "Идет запрос";
        setTimeout(() => {  
            document.querySelector('.favorites__save').remove(); 
            document.querySelector('.ssilka').style.display = "block";}, 3000);
        
        console.log(this.props.favoriteID)
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
                <button type="button" className="favorites__save" onClick={this.ButtonClick}>Сохранить список</button>
                <Link className="ssilka" to={`/list/${this.props.favoriteID}`}>Перейти к списку</Link>
            </div>
        );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Favorites);