import React from "react";
import "./product.css";

class product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Product">
        <img src={this.props.img} />
        <h3>{this.props.name}</h3>
        <p>{this.props.designation}</p>
        <p>{this.props.quantiter}</p>
      </div>
    );
  }
}

export default product;
