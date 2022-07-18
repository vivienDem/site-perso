import React from "react";
import { Link } from "react-router-dom";

const MailButton = ({ mailto, label }) => {
  return (
    <div className="mail">
      <Link
        className="link"
        to="#"
        onClick={(e) => {
          window.open("mailto:" + mailto);
        }}
      >
        <div className="content">
          <h4>{label}</h4>
        </div>
        <div className="logo">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </Link>

    </div>
  );
};

export default MailButton;
