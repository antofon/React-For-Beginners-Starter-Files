import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. either add to order, or update number in our order
    // if it exists, update key. but if we haven't ordered it, make that the first key
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* if you want to pass in anything other than string, use {}, ex: cool={true} */}
          {/* {state: where data lives, props: how the data gets to the component} */}
          {/* Note in chrome dev tools, if you click on a component, it will show $r which is '$r'. you can type $r in console and it will print out the contents of the Header component, which is just an object */}
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {/* Object.keys gives us all of the keys to loop over our fish */}
            {/* need unique id for react to refer to the element you want */}
            {Object.keys(this.state.fishes).map(key => (
              // if you need to pass key as a prop, you need to pass it a second time because the key is also used as a unique identifier in this Component. here the key prop is 'index'
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
          {/* <Header tagline="I am cool" /> */}
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
