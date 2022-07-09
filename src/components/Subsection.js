import React from 'react';
import Collapsible from 'react-collapsible';

const Subsection = ({ title, content }) => {
    return (
        <div className='subsection'>
            <Collapsible trigger={title}>
                {content}
            </Collapsible>
        </div>
    );
};

export default Subsection;