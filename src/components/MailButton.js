import React from 'react';
import { Link } from "react-router-dom";
import mailLogo from '../assets/mail.svg'

const MailButton = ({ mailto, label }) => {
    return (
        <div className='mail'>
            {label}
            <Link
                to='#'
                onClick={(e) => {
                    window.open('mailto:' + mailto)
                }}
            >{mailto}
            </Link>
            <img src={mailLogo} className='logo'></img>
        </div>
    );
};

export default MailButton;