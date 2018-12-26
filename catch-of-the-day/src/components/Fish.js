import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends Component {
  // for regular react components you can create a static PropType, creating proptypes for all of the fish and it is not necessary to duplicate for every fish instance
  static propTypes = {
    //.shape() accepts an object, and then you can specify what all of the properties are
    // anytime you write this.props.something, you should write a propType for it. Wes: stop, drop, prop
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    //   use ES6 object destructuring to make listing objects easier
    //   assign object data to a var to use
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
