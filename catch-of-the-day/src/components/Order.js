import React, { Component } from "react";
import { formatPrice } from "../helpers";
class Order extends Component {
  // make separate render functions in single Component. when code is starting to get too complex but not enough for a whole new component since this won't be used much elsewhere. custom render function name.
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    //make sure the fish is loaded before Component fully mounts
    if (!fish) {
      return null;
    }
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available.
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    // use reduce() to take in data and in our case return a tally
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      //there is a fish AND it is available
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        //running tally
        return prevTotal + count * fish.price;
      }

      //skip over unavailable fish and return the prev total.
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>

        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
