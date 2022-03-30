import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import AvatarPicker from "./components/AvatarPicker/AvatarPicker";
import images from "./data/images";

class App extends Component {
  render() {
    return (
      <Layout>
        <AvatarPicker avatars={images}> </AvatarPicker>
      </Layout>
    );
  }
}

export default App;
