import React from 'react';
import './App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div className="searchContainer">
        <input type="text" placeholder="Filter by title or genre" />
      </div>
    );
  }
}

export default Search;