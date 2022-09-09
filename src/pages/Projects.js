import React from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/Projects/ProjectsList";

export default class Project extends React.Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = { language: this.cookies.get("lang") };
  }

  setLanguage = (lang) => {
    this.setState({ language: lang });
  };

  getLanguage = () => {
    return this.state.language;
  };

  render() {
    return (
      <div>
        <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
        <div className="projectsPage">
          <ProjectList cookies={this.cookies} getLanguage={this.getLanguage} />
        </div>
      </div>
    );
  }
}
