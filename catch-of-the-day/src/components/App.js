import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends Component {
  // pass data down from higher Parent Component to share with other Components, using state. can set state with constructor or a property
  // any custom function that needs to update state needs to live where our state lives
  state = {
    fishes: {},
    //persisting order state with localStorage
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  // lifecycle methods tell us when certain things are happening. need to wait until app component is on page to sync things up

  //when app is loaded on to the page
  componentDidMount() {
    // refs are different in firebase. they are a reference to a piece of the data in database
    const { params } = this.props.match;
    //first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    // turn string back into object with JSON.parse
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    console.log(localStorageRef);
    // params is the actual value of the random generated path. for now we only care about 'fishes' so that's why it's at the end.

    this.refs = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  //whenever you add to order
  componentDidUpdate() {
    console.log(this.state.order);
    //add to localStorage
    // anytime you put object in the place where a string should be the browser will list call the toString() on object which is just [object] [object].
    //In application tab,
    //this.props.match.params.storeId = key, this.state.order = value
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    //prevents listening to changes and then unlistening from them. also prevents memory leaks. mount when go to application, unmount when you click 'back' button
    base.removeBinding(this.refs);
  }

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

  updateFish = (key, updatedFish) => {
    //1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3.Set that to this.state
    this.setState({ fishes });
  };

  deleteFish = key => {
    //1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. update the this.state
    // set the fish that we don't want to null (for firebase)
    fishes[key] = null;
    //3. update state
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

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove the item from order
    // not mirroring to firebase, so can just delete it
    delete order[key];
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
        {/* object spread (i.e {...this.state}) spreads everything from state into order. want to make modular components where we know what data is getting passed. also there might not want to be data that you want to pass down */}
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
