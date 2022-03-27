import React, {Component} from 'react';
import './App.css';
import Refresh from './Refresh';
import ShowCoordinates from './ShowCoordinates';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      location: {
        long: 0,
        lat: 0
      },
      refresh: false
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.onEenClick();
  }

  onEenClick = async () => {
      let newLoc = (await fetch('http://api.open-notify.org/iss-now.json'));
      newLoc = await(newLoc.json());
      this.setState({location: {long: newLoc.iss_position.longitude, lat: newLoc.iss_position.latitude}});
    }

  render (){
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Where is ISS currently?
          </h1>
        </div>
        <Refresh eenclick={this.onEenClick} />
        <ShowCoordinates long={this.state.location.long} lat={this.state.location.lat}/>
      </div>
    )
  };
}

export default App;
