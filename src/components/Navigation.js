import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageButton from './LanguageButton';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
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
                    <LanguageButton updateLang={this.props.updateLang} cookies={this.props.cookies}></LanguageButton>
                </ul>
            </div>
        );
    }

}


