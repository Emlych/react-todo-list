import React from "react";

const Footer = ({ techno, author }) => {
  return (
    <div className="footer container">
      Made with &nbsp;<span>{techno}</span> &nbsp; by &nbsp;
      <span>{author}</span>
    </div>
  );
};

export default Footer;
