import React from "react";
import SubHeader from "./SubHeader";

class Header extends React.Component {
  state = {
    name: "Manjari",
    show: true,
  };
  constructor() {
    super();
    //console.log("constructor");
  }

  /**
   *
   *
   *
   *   Mount will only work on class component
   *
   *   Mount -> only works after contsructor is loaded, then pura HTML render hone ke badh, mount method chalta h
   *
   *   badh m agar html ya koi aur event se changes aaenge toh mount nhi chalega...
   *   woh sirf ek baar chlta h.. starting m.. bss...
   *
   *   It is good for API calls
   *
   *
   */

  /**
   *
   *
   *  if you call setState inside render, then it will be stuck in an infinite loop
   *
   */

  componentDidMount() {
    //this.setState({name:"Jain2"});  // here constructor -> render -> mount -> mount has change the state so render will be called again
    //console.log("mount ");
  }

  // it will only jab state ya props m change aaega warna yeh nhi chalega, becareful about updating state in componentdidupdate otherwise
  // it could stuck in an infinite loop;
  componentDidUpdate(prevProps, prevState, snapshot) {
    //this.setState({name:"MJ16"});
    //console.log("update ", prevProps, prevState, snapshot); // render -> update
    if (prevState.name === this.state.name) {
      //console.log("data is same");
      return;
    }
  }

  shouldComponentUpdate() {
    // it can stop rendering
    //console.log("shouldUpdate ", this.state); // here, it is updating the state but since rendering is stop
    // the latest values are not shown
    // we can resume rendering by returning true
    return true;
  }
  render() {
    // this.setState({name:"MJ"});  // here it will be stucked in an infinite loop
    // console.log("render");
    return (
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Fake Shop of {this.state.name}</h2>
          <button onClick={() => this.setState({ show: !this.state.show })}>
            Toggle Sub Heading
          </button>
        </div>
        {this.state.show && <SubHeader />}
      </div>
    );
  }
}

export default Header;
