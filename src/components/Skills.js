import React from 'react';

const Skills = ({ field, level, logo }) => {
    return (
        <div>
            <img className='skillsLogo' src={logo} /> <p className='skilsInfo'>{field} - {level} </p>
        </div>
    );
};

export default Skills;