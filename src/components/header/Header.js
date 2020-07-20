import React from "react";
import logo from "../../img/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header" data-testid="header">
        <img src={logo} className="logo" />
      </div>
    );
  }
}

export default Header;
