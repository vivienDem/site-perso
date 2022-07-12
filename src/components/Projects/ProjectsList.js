import React, { Component } from 'react';
import { projects, allRadio } from '../../data/projectsData';
import Project from './Project';

class ProjectList extends Component {

    constructor(props) {
        super();
        this.cookies = props.cookies;
        this.state = {
            projects: projects,
            language: this.cookies.get('lang'),
            radios: [
                { id: 0, value: "all" },
                { id: 1, value: "Haskell" },
                { id: 2, value: "Javascript" },
                { id: 3, value: "React" },
                { id: 4, value: "Python" },
                { id: 5, value: "Java" },
                { id: 6, value: "C++" },
                { id: 7, value: "OCaml" },
                { id: 8, value: "MIPS" },
            ],
            selectedRadio: "all"
        }

    }

    updateRadio = (e) => {
        let currentRadio = e.target.value;
        this.setState({ selectedRadio: currentRadio });
    }



    render() {
        let { projects, radios, selectedRadio } = this.state;
        return (
            <div className="projectsListContent">
                <ul className='radioBanner'>
                    {
                        radios.map(radio => {
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
                                        {radio.value === "all" ? allRadio[this.props.getLanguage()] : radio.value}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='projects'>
                    {
                        projects
                            .filter(project =>
                                project.languages.includes(selectedRadio) || selectedRadio === "all"
                            )
                            .map(project => {
                                return (
                                    <Project key={project.key} item={project} cookies={this.cookies} getLanguage={this.props.getLanguage} />
                                )
                            })
                    }

                </div>
            </div>

        );
    }
}

export default ProjectList;