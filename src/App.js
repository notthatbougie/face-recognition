import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
// import UserInfo from './components/UserInfo/UserInfo'
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
      imageURL: "",
      faceBox: {},
      imageGender: {},
      imageAge: {},
      imageRace: {}
    }
  }

  calculateFaceLocation = (data) => {
    console.log(data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name + "\t" + data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].value);

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const imgWidth = Number(image.width);
    const imgHeight = Number(image.height);

    return {
      top: imgHeight * clarifaiFace.top_row,
      bottom: imgHeight - (imgHeight * clarifaiFace.bottom_row),
      left: imgWidth * clarifaiFace.left_col,
      right: imgWidth - (imgWidth * clarifaiFace.right_col)
    }

    // this.setState({faceBox: data.outputs[0].data.regions[0].region_info.bounding_box});
  }

  displayFaceBox = (box) => {
    this.setState({faceBox: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});

    // app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.imageURL)
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
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
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition
          imageURL={this.state.imageURL}
          faceBox={this.state.faceBox} />
      </div>
    );
  }
}

export default App;
