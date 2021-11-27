import React from 'react';
import './App.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div className="movieContainer">
        <img src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} />
        <h2>{this.props.title}</h2>
        <div className="detailsWrap">
            <div className="fadedText">{this.props.release_date}</div>
            <div>Rating: <span className="goldRating">{this.props.vote_average}</span></div>  
        </div>
      </div>
    );
  }
}

export default Movie;