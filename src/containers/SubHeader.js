import React from "react";

class SubHeader extends React.Component {
  constructor() {
    super();
    //console.log("subheader constructor");
  }

  componentWillUnmount() {
    //console.log("subheader component will unmount") // here student constructor and render will not be called
  }

  render() {
    //console.log("subheader render");
    return <div style={{ borderWidth: 1, borderColor: "black" }}>Student</div>;
  }
}

export default SubHeader;
