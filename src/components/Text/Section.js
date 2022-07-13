import React from 'react';
import Collapsible from 'react-collapsible';

const Section = ({ title, content }) => {
    return (
        <div className='section'>
            <Collapsible trigger={title}>
                {content}
            </Collapsible>
        </div>
    );
};

export default Section;