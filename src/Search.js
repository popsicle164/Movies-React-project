import React from 'react';
import './App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.tempFunction = this.tempFunction.bind(this);

  }

  tempFunction(e) {
    this.props.handleFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div className="searchContainer">
        <input type="text" placeholder="Filter by title" value={this.props.filterText}
          onChange={this.tempFunction}/>
      </div>
    );
  }
}

export default Search;