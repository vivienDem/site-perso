import React, { Component } from "react";
import { exitInfo, sourceCode, authorsText } from "../../data/projectsData";

class Project extends Component {
  state = {
    showInfo: false,
  };

  updateShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    let { name, languages, source, info, icons, authors } = this.props.item;
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

              <h3>{name[this.props.getLanguage()]}</h3>

              <div className="authors">
                <p className="author">
                  {authors.length < 2 ? authorsText[this.props.getLanguage()]["singular"] : authorsText[this.props.getLanguage()]["plural"]} :
                </p>
                {authors.map((author) => (
                  <p className="author" key={author}>{author}</p>
                ))}
              </div>

              <div className="text">
                <p>{info[this.props.getLanguage()]}</p>
              </div>

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
