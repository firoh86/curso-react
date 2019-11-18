import React from "react";

const Header = ({ titulo }) => {
  return (
    <nav className="header-nav">
      <div>
        <p>{titulo}</p>
      </div>
    </nav>
  );
};

export default Header;
