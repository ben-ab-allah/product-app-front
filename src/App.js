import React, { Component } from "react";
import Product from "./component/product/product.js";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Product
          name="prodA"
          designation="123"
          image="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
          quantiter="45"
        />
        <Product
          name="prodA"
          designation="123"
          image="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
          quantiter="45"
        />
        <Product
          name="prodA"
          designation="123"
          image="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
          quantiter="45"
        />
      </div>
    );
  }
}

export default App;
