import "./App.css";
import React, { Component } from "react";
// import Particles from "react-tsparticles";
import Clarifai from "clarifai";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import "tachyons";

// console.log(Clarifai);
const app = new Clarifai.App({
  apiKey: "8829df7283dc4b63a82f7099f38199d8",
  apiEndpoint: "https://api.clarifai.com",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      imageUrl: "",
      box: {},
    };
  }

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = image.width;
    const height = image.height;
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
    console.log(this.state.box);
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.inputValue });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.inputValue)
      .then((response) =>
        this.displayFaceBox(this.handleFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition
          imageUrl={this.state.imageUrl}
          imageName={this.state.imageName}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
