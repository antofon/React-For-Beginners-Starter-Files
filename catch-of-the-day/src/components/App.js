import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends Component {
  // pass data down from higher Parent Component to share with other Components, using state. can set state with constructor or a property
  // any custom function that needs to update state needs to live where our state lives
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1. take a copy of existing state. never want to modify state directly (called mutation). not necessary to do deep clone
    const fishes = { ...this.state.fishes };
    // 2. Add new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state
    // take copy of old state and merges it with new state
    // this.setState({
    // fishes: fishes
    // });
    // if property and value are the same, can just have one of them
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
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
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
