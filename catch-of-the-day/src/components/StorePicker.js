import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        {/* in React, if you put a value on an <input> you need to attach it to state. with our helpers file, if you want default text, you can use the defaultValue property. When the component mounts to the page, the getFunName function runs */}
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
        {/* comment */}
      </form>
    );
  }
}

export default StorePicker;
