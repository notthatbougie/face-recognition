import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import UserInfo from './components/UserInfo/UserInfo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';

const app = new Clarifai.App({
  apiKey: 'def4a649fc964ebfb68e0b954571a7ab'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      imageURL: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});

    console.log(event.target.value);
    console.log(this.state.input);
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});

    console.log(this.state.imageURL);

    // app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.imageURL).then(
    //   function(response) {
    //     // do something with response
    //     console.log(response);
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        {/*<UserInfo />*/}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit} />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;


// app.models.predict(
//   Clarifai.COLOR_MODEL,
//   // URL
//   "https://samples.clarifai.com/metro-north.jpg"
// ).then(function(response) {
//     // do something with responseconsole.log(response);
//     },
//     function(err) {// there was an error}
// );
