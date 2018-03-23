import React, { Component } from "react";
import Products from "./component/productList/productList.js";

import logo from "./logo.svg";
import "./App.css";

const products = [
  {
    name: "prodName",
    designation: "125",
    img:
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
  },
  {
    name: "prodName",
    designation: "125",
    img:
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
  },
  {
    name: "prodName",
    designation: "125",
    img:
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/uwjw39b1xdsbtmfnxjqm/chaussure-tanjun-pour-MkTmejeq.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Products productList={products} />
      </div>
    );
  }
}

export default App;
