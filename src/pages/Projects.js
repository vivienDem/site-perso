import React from 'react';
import Navigation from '../components/Navigation';

export default class Project extends React.Component {

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
            <div>
                <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
                En construction
            </div>
        )
    }
}