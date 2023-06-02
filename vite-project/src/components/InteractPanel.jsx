import React from "react";
import logo from "../images/logo.svg";
import svgDocument from "../images/icon-document.svg";
import svgFolder from "../images/icon-folder.svg";
import svgUpload from "../images/icon-upload.svg";
const InteractPanel = () => {
  return (
    <div className="InteractPanel">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <ul className="lists">
        <li>
          <img src={svgDocument} alt="document" />
        </li>
        <li>
          <img src={svgFolder} alt="folder" />
        </li>
        <li>
          <img src={svgUpload} alt="upload" />
        </li>
      </ul>
    </div>
  );
};

export default InteractPanel;
