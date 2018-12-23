import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  //COMMENT: runs before our Component is created
  // constructor() {
  //COMMENT: runs Component we are extending (React.Component) first before we can extend. must call 'super' first before running anything in constructor. And in the constructor is where you can bind all of the methods
  // super();
  // this.goToStore = this.goToStore.bind(this);
  //COMMENT: overwrites method on it and attaches a binding to (i.e. reference 'this' inside of the 'goToStore' method) as the StorePicker instance
  // COMMENT: binding a method makes it equal to the instance of the component

  // }

  //as app grows and more customs methods are created, the binding can become out of hand. Instead of declaring a method, we can declare a property that is set to an arrow function. properties are bound to the instance rather than 'undefined' so we can access 'this' within the property instead of binding.

  goToStore = event => {
    event.preventDefault();
    console.log(this);
  };

  myInput = React.createRef();
  goToStore(event) {
    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. get the text from that input
    console.log(this);
    //this is undefinded out of render method. all of the built in methods that come from React originate from React.Component. And when we extend our own component from that, any methods created in our own Component are not bound to React.Component by default. So its hard to reference a Component when we need to. So the solution is to bind our own methods.
    // golden rule in React: DONT TOUCH THE DOM. don't manually select elements
    // can handle inputs by 1. refs (touches dom to grab element out of it) or 2. state (sync text into input)
    // ref -> allows us to reference an actual DOM node o n the page
    //ex: create ref, then use ref={this.refName} to surface it so that it can be used
    // 3. Change the page to /store/whatever-they-entered
  }
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* in React, if you put a value on an <input> you need to attach it to state. with our helpers file, if you want default text, you can use the defaultValue property. When the component mounts to the page, the getFunName function runs */}
        <input
          type="text"
          ref={this.myInput}
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
