import React, { Component } from "react";
import PropTypes from "prop-types";

// stateless functional component: if component only has a render method and prop types, can convert class to stateless functional component

// when you have a function there is no 'this' so function gets prop arg and you can remove the 'this' prefix. all being passed in via header

//arrow function is mandatory a bit more concise syntax
// don't need 'return' keyword because it is implied with arrow functions: implicit return

//if you only have one arg, you don't need parens, but 2 args or more you do.

//addtional step, you can destructure props into vars
// ({tagline, age})
// props.tagline becomes tagline
// if you wanted to use variable (age) beside prop (tagline), they need to be side by side
// {tagline}{age}
// const Header = ({ tagline, age }) => (
//   <header className="top">
//     <h1>
//       Catch
//       <span className="ofThe">
//         <span className="of">Of</span>
//         <span className="the">The</span>
//       </span>
//       Day
//     </h1>
//     <h3 className="tagline">
// {
/* {} in JSX means: im going to use JS for a quick second */
// }
// {
/* this: is the component instance, ie: whatever the component got passed in when it got used. In this case it's Header */
// }
// {
/* <span>
        {tagline}
        {age}
      </span>
    </h3>
  </header> 
);*/
// }

const Header = props => (
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
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// propTypes allows you to know ahead of time what type of data you're expecting
//development helper, propTypes will not go to production

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};
export default Header;
