import React from 'react';
import './App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div className="searchContainer">
        <input type="text" placeholder="Filter by title" value={this.props.filterText}
          onChange={this.handleFilterTextChange}/>
      </div>
    );
  }
}

export default Search;