import React, { Component } from "react";

class StorePicker extends Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
        {/* comment */}
      </form>
    );
  }
}

export default StorePicker;
