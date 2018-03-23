import React from "react";
import Product from '../product/product.js'

class product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Products">
        {this.props.productList.map(product => {
          return <Product name={product.name} img={product.img} />;
        })}
      </div>
    );
  }
}

export default product;
