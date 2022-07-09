import React from 'react';
import frLogo from '../assets/fr.svg';
import ukLogo from '../assets/uk.svg';


export default class Parent extends React.Component {

    constructor() {
        super();
        this.state = { language: "fr", logo: frLogo };
    }

    changeLanguage() {
        let newLang = this.state.language === "fr" ? "eng" : "fr";
        let newLogo = this.state.language === "fr" ? frLogo : ukLogo;
        this.setState({ language: newLang, logo: newLogo });
    }
}