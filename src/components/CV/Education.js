import React from 'react';

const Education = ({ date, cursus, school }) => {
    return (
        <div>
            <p className='education'>{date} <strong>{cursus}</strong> {school}</p>
        </div>
    );
};

export default Education;