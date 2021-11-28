import React from 'react';
import './App.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     display: "hidden",
    // }

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {

  }

  render() {
    return (
        <div className="modalDisplay">
            <div className="modalContainer">
                <div className="modalMain">
                    <div className="close"><span className="xSymbol">&times;</span> Close</div>
                    <img src="https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg" />
                    <div className="modalDescription">After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Modal;