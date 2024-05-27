import React from "react";

class Header extends React.Component {
  state = {
    name : "Manjari"
  }
  constructor() {
    super();
    console.log("constructor");
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
   * 
   */


  componentDidMount() {
    console.log("mount ");
  }
  render() {
    console.log("render");
    return (
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Fake Shop of {this.state.name}</h2>
          <button onClick={()=>this.setState({name:"Jain"})}> Update Name </button>
        </div>
      </div>
    );
  }
}

export default Header;
