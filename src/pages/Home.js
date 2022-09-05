import React, { Component } from "react";
import Navigation from "../components/Navigation";
import * as data from "../data/homeData";

class Home extends Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      language: this.cookies.get("lang"),
    };
  }

  setLanguage = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="homePage">
        {this.props.background}
        <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
        <div className="text">{data.text[this.state.language]}</div>
      </div>
    );
  }
}

export default Home;
