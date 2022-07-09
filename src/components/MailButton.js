import React from 'react';
import { Link } from "react-router-dom";

const MailButton = ({ mailto, label }) => {
    return (
        <div>
            {label}
            <Link
                to='#'
                onClick={(e) => {
                    window.open('mailto:' + mailto)
                }}
            >{mailto}
            </Link>
        </div>

    );
};

export default MailButton;