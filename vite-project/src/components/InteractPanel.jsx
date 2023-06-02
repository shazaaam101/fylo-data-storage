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
      <section className="row">
        <img src={svgDocument} alt="document" />
        <img src={svgFolder} alt="folder" />
        <img src={svgUpload} alt="upload" />
      </section>
    </div>
  );
};

export default InteractPanel;
