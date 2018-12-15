import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          {/* {} in JSX means: im going to use JS for a quick second */}
          {/* this: is the component instance, ie: whatever the component got passed in when it got used. In this case it's Header */}
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
