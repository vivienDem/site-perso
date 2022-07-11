import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageButton from './LanguageButton';

//Links titles
var projects = { "fr": "Projets", "eng": "Projects" }

export default class Navigation extends React.Component {

    constructor(props) {
        super();
        this.cookies = props.cookies;
        this.state = { language: this.cookies.get('lang'), logo: this.cookies.get('langLogo') };
    }

    setLanguage = lang => {
        this.props.updateLang(lang);
        this.setState({ language: lang });
    }

    render() {
        return (
            <div className='navigation'>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li> Curriculum vitae </li>
                    </NavLink>
                    <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                        <li> Contact </li>
                    </NavLink>
                    <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>{projects[this.state.language]}</li>
                    </NavLink>
                    <LanguageButton updateLang={this.setLanguage} cookies={this.props.cookies}></LanguageButton>
                </ul>
            </div>
        );
    }

}


