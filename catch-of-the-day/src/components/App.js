import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* if you want to pass in anything other than string, use {}, ex: cool={true} */}
          {/* {state: where data lives, props: how the data gets to the component} */}
          {/* Note in chrome dev tools, if you click on a component, it will show $r which is '$r'. you can type $r in console and it will print out the contents of the Header component, which is just an object */}
          <Header tagline="Fresh Seafood Market" />
          <Header tagline="I am cool" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
