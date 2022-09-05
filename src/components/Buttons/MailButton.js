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
          <h4>{label}  <i className="fa fa-envelope" aria-hidden="true"></i></h4>
        </div>
      </Link>

    </div>
  );
};

export default MailButton;
