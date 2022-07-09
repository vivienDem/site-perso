import React from 'react';
import Navigation from '../components/Navigation';
import MailButton from '../components/MailButton';


var mail = { "fr": "Adresse e-mail : ", "eng": "Email address : " };

export default class Contact extends React.Component {

    constructor(props) {
        super();
        this.cookies = props.cookies;
        this.state = { language: this.cookies.get('lang'), logo: this.cookies.get('langLogo') };
    }

    setLanguage = lang => {
        this.setState({ language: lang });
    }


    render() {
        return (
            <div>
                <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
                <MailButton mailto="viviendemeulenaere@outlook.fr" label={mail[this.state.language]} />
            </div>
        );
    }
}