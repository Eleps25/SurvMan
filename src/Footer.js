import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 mx-2 border-top fixed-bottom">
      <p className="col-3 mb-0 text-muted">©2021</p>
      <p className="col-6 mb-0 text-muted">Pro pomoc volejte 123 456 789</p>
      <div>
        <a
          href="https://github.com/Eleps25"
          className="col-3 link-dark text-decoration-none"
        >
          Created by <span style={{ color: "#82c0cc" }}>Jakub Mezuláník</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
