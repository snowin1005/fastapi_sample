import React from "react";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "Welcome"};
  }

  changeTitle(title) {
      this.setState({title: title});
  }

  render() {
    // setTimeout(
    //   () => { console.log("called"); this.setState({title: "Welcome Tsutomu!"}); },
    //   2000
    // );
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}