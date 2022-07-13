import React from "react";
import { Link } from "react-router-dom";
import mailLogo from "../../assets/mail.svg";

const MailButton = ({ mailto, label }) => {
  return (
    <div className="mail">
      {label}
      <Link
        className="link"
        to="#"
        onClick={(e) => {
          window.open("mailto:" + mailto);
        }}
      >
        {mailto}
      </Link>
      <div className="logo">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default MailButton;
