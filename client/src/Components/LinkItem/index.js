import React from "react";
import "./index.css";

const LinkItem = ({ name, url }) => {
  return (
    <li className="dropdown-list-item">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        {name}
      </a>
    </li>
  );
};

export default LinkItem;
