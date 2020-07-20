import React, { Component } from "react";
import Box from "../box/Box";

class BoxContainer extends React.Component {
  state = {
    list: [],
  };
  // Use the render function to return JSX component
  componentDidMount() {
    fetch(
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          list: result.sort(
            (a, b) => parseInt(a.stepNumber) - parseInt(b.stepNumber)
          ),
        });
      });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="section">
        <h2 className="main-heading">How It Works</h2>
        <div className="step-container">
          {list.map((item) => {
            return (
              <Box
                key={item.id}
                versionContent={item.versionContent}
                step={item.stepNumber}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BoxContainer;
