import React from 'react';
import './App.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    if(!this.props.show){
      return (null);
  }

    return (
        <div className="modalDisplay">
            <div className="modalContainer">
                <div className="modalMain">
                    <div onClick={this.props.hideModal} className="close"><span className="xSymbol">&times;</span> Close</div>
                    <img src={"https://image.tmdb.org/t/p/w500" + this.props.backdrop_path} />
                    <div className="modalDescription">{this.props.overview}</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Modal;