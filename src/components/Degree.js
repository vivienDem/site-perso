import React from 'react';

const Degree = ({ year, degree, honours }) => {
    return (
        <div>
            <p className='degree'>{year} {degree} - {honours}</p>
        </div>
    );
};

export default Degree;