import './App.css';
import rdata from "./data.json";
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();

    //this is a react standard, you must call this.state
    this.state = {
      data: rdata,
      score: 0,
      topscore: 0,
    }

  }

  checkImage = (event) => {

    // debugger;
    window.onclick = shuffle(rdata)
    function shuffle(rdata) {
      for (let i = rdata.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rdata[i], rdata[j]] = [rdata[j], rdata[i]];
      }
      return rdata;
    }
    shuffle(rdata);
    //event.target will get you what you just clicked on, which is the image

    var imageId = event.target.getAttribute('data-id');

    // debugger;

    // eslint-disable-next-line eqeqeq
    if (this.state.data[imageId - 1].clicked == false) {

      //need to make clicked to true


      let newData = this.state.data.map(item => {
        // eslint-disable-next-line eqeqeq
        if (item.id == imageId) item.clicked = true;
        return item;
      })

      this.setState({
        data: newData,
        score: this.state.score + 1
      })

    } else {
      this.setState({
        topscore: this.state.score,
        score: 0
      })
    }

  }

  render() {
    return (

      <div className="App">
        < nav class="navbar" >
          <h1>Clicky Game</h1>
        </nav >
        <h2>Score: {this.state.score} | Top Score: {this.state.topscore}</h2>
        <div class="results"></div>
        <div class="imageContainer">
          {this.state.data.map(item => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              key={item.id}
              data-id={item.id}
              onClick={this.checkImage}
              src={item.image}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
