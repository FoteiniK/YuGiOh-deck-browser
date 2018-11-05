import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Simple Yu-Gi-Oh deck app by{" "}
        <a
          href="https://github.com/FoteiniK"
          target="_blank"
          aria-label="Link to Foteini Kollia's github page"
        >
          Foteini Kollia.
        </a>{" "}
        Cards info fetched from{" "}
        <a
          href="http://52.57.88.137/"
          target="_blank"
          aria-label="Link to simplified mirror api"
        >
          here.
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
