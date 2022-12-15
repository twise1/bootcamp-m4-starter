import React, { Component } from 'react';
import './ListPage.css';
import {connect} from "react-redux";
import { makeList } from '../../redux/action';

const mapStateToProps = (state) => {
    return {
        listPage: state.listPage,
        favoriteID: state.favoriteID,
    };
}

const mapDispatchToProps = (dispatch) => ({
    makeList: (data) => dispatch(makeList(data)),   
});

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ],
        title: ""
    }
    componentDidMount() {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${this.props.favoriteID}`)
        .then(res => res.json())
        .then(data => {
          this.props.makeList(data.movies);
          this.setState({title: data.title});
          console.log(this.props.listPage);
        });
    }

    render() { 
        if(this.props.listPage.length === 0) return true;    
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.title}</h1>
                <ul>
                    {this.props.listPage.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);