import React, { Component } from "react";
import { projects, allRadio } from "../../data/projectsData";
import Project from "./Project";

class ProjectList extends Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      projects: projects,
      language: this.cookies.get("lang"),
      radios: [
        { id: 0, value: "All" },
        { id: 1, value: "Haskell" },
        { id: 2, value: "Javascript" },
        { id: 3, value: "React" },
        { id: 4, value: "Python" },
        { id: 5, value: "Java" },
        { id: 6, value: "C++" },
        { id: 7, value: "OCaml" },
        { id: 8, value: "MIPS" },
      ],
      selectedRadio: "All",
    };
  }

  updateRadio = (e) => {
    let currentRadio = e.target.value;
    this.setState({ selectedRadio: currentRadio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;
    return (
      <div className="projectsListContent">
        {
          <ul className="radioBanner">
            {radios
              .sort((radio1, radio2) => {
                return radio1.value > radio2.value;
              })
              .map((radio) => {
                return (
                  <li key={radio.id}>
                    <input
                      type="radio"
                      name="radio"
                      checked={radio.value === selectedRadio}
                      value={radio.value}
                      id={radio.value}
                      onChange={this.updateRadio}
                    />
                    <label htmlFor={radio.value}>
                      {radio.value === "All"
                        ? allRadio[this.props.getLanguage()]
                        : radio.value}
                    </label>
                  </li>
                );
              })}
          </ul>
        }
        <div className="projects">
          {projects
            .sort((project1, project2) => {
              return (
                project1.name[this.props.getLanguage()] >
                project2.name[this.props.getLanguage()]
              );
            })
            .filter(
              (project) =>
                project.languages.includes(selectedRadio) ||
                selectedRadio === "All"
            )
            .map((project) => {
              return (
                <Project
                  key={project.id}
                  item={project}
                  cookies={this.cookies}
                  getLanguage={this.props.getLanguage}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
