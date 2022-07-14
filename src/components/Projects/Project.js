import React, { Component } from "react";
import { exitInfo, sourceCode } from "../../data/projectsData";

class Project extends Component {
  state = {
    showInfo: false,
  };

  updateShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    let { name, languages, source, info, icons } = this.props.item;
    return (
      <div className={"project"}>
        <div className="logo">
          {icons.map((icon) => (
            <img src={icon} className="languageLogo" key={icon} />
          ))}
        </div>
        <h3>{name[this.props.getLanguage()]}</h3>
        <span className="info" onClick={this.updateShowInfo}>
          <i className="fa fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfo">
            <div className="infoContent">
              <div className="head">
                <h3>{name[this.props.getLanguage()]}</h3>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="sourceButton"
                    target="blank"
                  >
                    {sourceCode[this.props.getLanguage()]}
                  </a>
                </div>
              </div>

              <p className="text">{info[this.props.getLanguage()]}</p>

              <button className="exitButton" onClick={this.updateShowInfo}>
                <p>{exitInfo[this.props.getLanguage()]}</p>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
