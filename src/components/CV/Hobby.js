import React from "react";

const Hobby = ({ name, content }) => {
  return (
    <div>
      <p>
        <strong className="hobbyName">{name}</strong> {content}
      </p>
    </div>
  );
};

export default Hobby;
