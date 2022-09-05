import React from "react";
import Section from "../components/Text/Section";
import Subsection from "../components/Text/Subsection";
import Education from "../components/CV/Education";
import frLogo from "../assets/fr.svg";
import ukLogo from "../assets/uk.svg";
import javaLogo from "../assets/java.svg";
import pythonLogo from "../assets/python.svg";
import cLogo from "../assets/c.svg";
import ocamlLogo from "../assets/ocaml.svg";
import mipsLogo from "../assets/mips.svg";
import haskellLogo from "../assets/haskell.svg";
import cplusplusLogo from "../assets/c++.svg";
import bashLogo from "../assets/bash.svg";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/js.svg";
import myPicture from "../assets/moi.jpg";
import Degree from "../components/CV/Degree";
import Skills from "../components/CV/Skills";
import Job from "../components/CV/Job";
import Navigation from "../components/Navigation";
import * as data from "../data/cvData";
import Hobby from "../components/CV/Hobby";

export default class CV extends React.Component {
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
      <div className="cvPage">
        {this.props.background}
        <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
        <div className="title">
          <img src={myPicture} alt={data.alt} className="myPicture"></img>
          <h1 className="name"> Vivien Demeulenaere</h1>
        </div>
        <div className="cv">
          <Section
            title={data.birthTitle[this.state.language]}
            content={data.birthContent[this.state.language]}
          />
          <Section
            title={data.educationTitle[this.state.language]}
            content={
              <ul className="list">
                <li>
                  <Education
                    date="2021-2022"
                    cursus={data.education_21_22[this.state.language]}
                    school="Jussieu, Paris"
                  />
                </li>
                <li>
                  <Education
                    date="2018-2021"
                    cursus={data.education_18_21[this.state.language]}
                    school="Jussieu, Paris"
                  />
                </li>
                <li>
                  <Education
                    date="2017-2018"
                    cursus={data.education_17_18[this.state.language]}
                    school="Lycée Saint Louis, Paris"
                  />
                </li>
                <li>
                  <Education
                    date="2014-2017"
                    cursus=""
                    school="Lycée Jean Zay, Aulnay-sous-bois"
                  />
                </li>
              </ul>
            }
          />
          <Section
            title={data.degreesTitle[this.state.language]}
            content={
              <ul className="list">
                <li>
                  <Degree
                    year="2021"
                    degree={data.bsc[this.state.language]["degree"]}
                    honours={data.bsc[this.state.language]["honours"]}
                  />
                </li>
                <li>
                  <Degree
                    year="2017"
                    degree={data.aLevels[this.state.language]["degree"]}
                    honours={data.aLevels[this.state.language]["honours"]}
                  />
                </li>
              </ul>
            }
          />
          <Section
            title={data.jobTitle[this.state.language]}
            content={
              <ul className="list">
                <li>
                  <Job
                    duration={data.dgccrf[this.state.language]["date"]}
                    job={data.dgccrf[this.state.language]["job"]}
                    employer="DGCCRF (Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes)"
                    location="Paris"
                    task={data.dgccrf[this.state.language]["task"]}
                  />
                </li>
              </ul>
            }
          />
          <Section
            title={data.skillsTitle[this.state.language]}
            content={
              <ul className="list">
                <Subsection
                  title={data.languagesTitle[this.state.language]}
                  content={
                    <ul className="subList">
                      <li>
                        <Skills
                          field={data.french[this.state.language]["field"]}
                          level={data.french[this.state.language]["level"]}
                          logo={frLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field={data.english[this.state.language]["field"]}
                          level={data.english[this.state.language]["level"]}
                          logo={ukLogo}
                        />
                      </li>
                    </ul>
                  }
                />

                <Subsection
                  title={data.programmingTitle[this.state.language]}
                  content={
                    <ul className="subList">
                      <li>
                        <Skills
                          field="Java"
                          level={
                            data.programmingLevels[this.state.language][
                            "advanced"
                            ]
                          }
                          logo={javaLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="Python"
                          level={
                            data.programmingLevels[this.state.language][
                            "advanced"
                            ]
                          }
                          logo={pythonLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="C"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={cLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="OCaml"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={ocamlLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="MIPS"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={mipsLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="Haskell"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={haskellLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="JavaScript"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={jsLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="React"
                          level={
                            data.programmingLevels[this.state.language][
                            "intermediate"
                            ]
                          }
                          logo={reactLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="C++"
                          level={
                            data.programmingLevels[this.state.language][
                            "beginner"
                            ]
                          }
                          logo={cplusplusLogo}
                        />
                      </li>
                      <li>
                        <Skills
                          field="Bash"
                          level={
                            data.programmingLevels[this.state.language][
                            "beginner"
                            ]
                          }
                          logo={bashLogo}
                        />
                      </li>
                    </ul>
                  }
                />
              </ul>
            }
          />
          <Section
            title={data.hobbiesTitle[this.state.language]}
            content={
              <ul className="list">
                <li>
                  <Hobby
                    name={data.crossbow[this.state.language]["name"]}
                    content={data.crossbow[this.state.language]["content"]}
                  />
                </li>
                <li>
                  <Hobby
                    name={data.trips[this.state.language]["name"]}
                    content={data.trips[this.state.language]["content"]}
                  />
                </li>
              </ul>
            }
          />
        </div>
      </div>
    );
  }
}
