import React from "react";

class SubHeader extends React.Component {
  constructor() {
    super();
    console.log("student constructor");
  }

  componentWillUnmount() {
    console.log("student component will unmount") // here student constructor and render will not be called
  }

  render() {
    console.log("student render");
    return <div style={{ borderWidth: 1, borderColor: "black" }}>Student</div>;
  }
}

export default SubHeader;
