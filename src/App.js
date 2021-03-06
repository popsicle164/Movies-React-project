import React from 'react';
import './App.css';
import Search from './Search';
import Movie from './Movie';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie_library: [],
      filterText: "",
      show: false,
      modalOverview: "",
      modalBackdrop_path: ""
    }

    this.modalData = this.modalData.bind(this);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

  }


  modalData (overview, backdrop_path) {
    this.setState({
      modalOverview: overview,
      modalBackdrop_path: backdrop_path,
      show: true
    });
  }

  hideModal = e => {
    this.setState({show: false});
  }

  handleFilterTextChange(userInput) {
    this.setState({
      filterText: userInput
    });
  }

  componentDidMount()
  {
    this.loadMovies();
  }

  loadMovies() {
    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
      .then(response =>
        response.json())
      .then(json_response => 
        this.setState({movie_library: json_response.results}));
    
  }
  
  render() {
    let movies = [];
    for(let i = 0; i < this.state.movie_library.length; i++)
    {
      if (this.state.movie_library[i].title.toLowerCase().includes(this.state.filterText.toLowerCase()) === true) {
        movies.push(
          <Movie poster_path = {this.state.movie_library[i].poster_path} title = {this.state.movie_library[i].title} release_date = {this.state.movie_library[i].release_date} vote_average = {this.state.movie_library[i].vote_average} modalData = {this.modalData} overview = {this.state.movie_library[i].overview} backdrop_path = {this.state.movie_library[i].backdrop_path}/>
        )
      }
    }



    return (
      <div>
        <Modal overview = {this.state.modalOverview} backdrop_path = {this.state.modalBackdrop_path} show={this.state.show} hideModal = {this.hideModal}/>
        <Search filterText = {this.state.filterText} handleFilterTextChange = {this.handleFilterTextChange}/>
        <div className="libraryContainer">
          {movies}
        </div>
      </div>
    );
  }
}

export default App;