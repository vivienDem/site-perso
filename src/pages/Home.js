import React from 'react';
import Section from '../components/Section';
import Subsection from '../components/Subsection';
import Education from '../components/Education';
import frLogo from '../assets/fr.svg';
import ukLogo from '../assets/uk.svg';
import javaLogo from '../assets/java.svg';
import pythonLogo from '../assets/python.svg';
import cLogo from '../assets/c.svg';
import ocamlLogo from '../assets/ocaml.svg';
import mipsLogo from '../assets/mips.svg';
import haskellLogo from '../assets/haskell.svg';
import cplusplusLogo from '../assets/c++.svg';
import bashLogo from '../assets/bash.svg';
import reactLogo from '../assets/react.svg';
import jsLogo from '../assets/js.svg';
import myPicture from '../assets/moi.jpg'
import Degree from '../components/Degree';
import Skills from '../components/Skills';
import Job from '../components/Job';
import Navigation from '../components/Navigation';


//Functions 
function getAge(date) {
    const diff = Date.now() - date.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}

// Birth section 
const birthTitle = { "fr": "Date de naissance", "eng": "Date of birth" };
const birthContent = { "fr": "30/11/1999 (" + getAge(new Date(1999, 11, 30)) + " ans)", "eng": "30/11/1999 (" + getAge(new Date(1999, 11, 30)) + " years old)" }

//Education section 
const educationTitle = { "fr": "Formation", "eng": "Education" };
const education_21_22 = { "fr": "M1 Informatique - Parcours STL", "eng": "MSC - Computer Science" };
const education_18_21 = { "fr": "Licence - Informatique", "eng": "BSC - Computer Science" };
const education_17_18 = { "fr": "CPGE - PCSI", "eng": "Preparatory class for the \"grandes écoles\"" };

//Degrees section
const degreesTitle = { "fr": "Diplômes", "eng": "Degrees" };
const aLevels = { "fr": { "degree": "Baccalauréat Série S (spécialité physique)", "honours": "Mention TB" }, "eng": { "degree": "A levels", "honours": "With highest honour" } };
const bsc = { "fr": { "degree": "Licence d'informatique", "honours": "Mention AB" }, "eng": { "degree": "BSC in computer science", "honours": "With honours" } };

//Job section
const jobTitle = { "fr": "Expérience professionnelle", "eng": "Work Experience" };
const dgccrf = {
    "fr": {
        "date": "Juillet 2019", "job": "Contractuel", "task": "Mission d’archivage au bureau 4A (Valorisation nutritionnelle et information sur les denrées \
alimentaires)"},
    "eng": { "date": "July 2019", "job": "Contract worker", "task": "Archiving task at the office 4A (Nutritional valuation and information on foodstuffs)" }
}

//Skills section
const skillsTitle = { "fr": "Compétences", "eng": "Skills" };
const languagesTitle = { "fr": "Langues parlées", "eng": "Languages" }
const english = {
    "fr": { "field": "Anglais", "level": "Niveau B2" },
    "eng": { "field": "English", "level": "Level B2" }
};
const french = {
    "fr": { "field": "Français", "level": "Niveau C2" },
    "eng": { "field": "French", "level": "Level C2" }
};
const programmingTitle = { "fr": "Langages de programmation", "eng": "Programming languages" }
const programmingLevels = {
    "fr": { "advanced": "Niveau avancé", "intermediate": "Niveau intermédiaire", "beginner": "Notions" },
    "eng": { "advanced": "Advanced level", "intermediate": "Intermediate level", "beginner": "Beginner level" }
}

export default class Home extends React.Component {

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
                <div className='title'>
                    <img src={myPicture} className="myPicture"></img>
                    <h1 className='name'> Vivien Demeulenaere</h1>
                </div>

                <Section title={birthTitle[this.state.language]} content={birthContent[this.state.language]} />
                <Section title={educationTitle[this.state.language]} content={
                    <ul className='list'>
                        <li><Education date="2021-2022" cursus={education_21_22[this.state.language]} school="Jussieu, Paris" /></li>
                        <li><Education date="2018-2021" cursus={education_18_21[this.state.language]} school="Jussieu, Paris" /></li>
                        <li><Education date="2017-2018" cursus={education_17_18[this.state.language]} school="Lycée Saint Louis, Paris" /></li>
                        <li><Education date="2014-2017" cursus="" school="Lycée Jean Zay, Aulnay-sous-bois" /></li>
                    </ul>
                } />
                <Section title={degreesTitle[this.state.language]} content={
                    <ul className='list'>
                        <li><Degree year="2021" degree={bsc[this.state.language]["degree"]} honours={bsc[this.state.language]["honours"]} /></li>
                        <li><Degree year="2017" degree={aLevels[this.state.language]["degree"]} honours={aLevels[this.state.language]["honours"]} /></li>
                    </ul>
                } />

                <Section title={jobTitle[this.state.language]} content={
                    <ul className='list'>
                        <li><Job duration={dgccrf[this.state.language]["date"]} job={dgccrf[this.state.language]["job"]}
                            employer="DGCCRF (Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes)"
                            location="Paris" task={dgccrf[this.state.language]["task"]} />
                        </li>
                    </ul>
                } />
                <Section title={skillsTitle[this.state.language]} content={
                    <ul className='list'>
                        <Subsection title={languagesTitle[this.state.language]} content={
                            <ul className='subList'>
                                <li><Skills field={french[this.state.language]["field"]} level={french[this.state.language]["level"]} logo={frLogo} /></li>
                                <li><Skills field={english[this.state.language]["field"]} level={english[this.state.language]["level"]} logo={ukLogo} /></li>
                            </ul>
                        } />

                        <Subsection title={programmingTitle[this.state.language]} content={
                            <ul className='subList'>
                                <li><Skills field="Java" level={programmingLevels[this.state.language]["advanced"]} logo={javaLogo} /></li>
                                <li><Skills field="Python" level={programmingLevels[this.state.language]["advanced"]} logo={pythonLogo} /></li>
                                <li><Skills field="C" level={programmingLevels[this.state.language]["intermediate"]} logo={cLogo} /></li>
                                <li><Skills field="OCaml" level={programmingLevels[this.state.language]["intermediate"]} logo={ocamlLogo} /></li>
                                <li><Skills field="MIPS" level={programmingLevels[this.state.language]["intermediate"]} logo={mipsLogo} /></li>
                                <li><Skills field="Haskell" level={programmingLevels[this.state.language]["intermediate"]} logo={haskellLogo} /></li>
                                <li><Skills field="JavaScript" level={programmingLevels[this.state.language]["intermediate"]} logo={jsLogo} /></li>
                                <li><Skills field="React" level={programmingLevels[this.state.language]["intermediate"]} logo={reactLogo} /></li>
                                <li><Skills field="C++" level={programmingLevels[this.state.language]["beginner"]} logo={cplusplusLogo} /></li>
                                <li><Skills field="Bash" level={programmingLevels[this.state.language]["beginner"]} logo={bashLogo} /></li>

                            </ul>
                        } />
                    </ul>
                } />
            </div>
        );
    };

}