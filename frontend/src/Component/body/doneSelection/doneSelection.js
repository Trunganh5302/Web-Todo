import React from "react";
import "../doneSelection/doneSelection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DoneSection({ sectionName }) {
  return (
    <div className="wrapperContainer">
      <div className="containerSection">
        <div className="headSection">
          <p className="titleSection">{sectionName}</p>
          <span className="numTask">1</span>
        </div>
        <a className="SectionMenu">***</a>
      </div>
      <div className="addTask">
        <FontAwesomeIcon icon={faPlus} />
        <p className="titleTask">Add task</p>
      </div>
    </div>
  );
}

export default DoneSection;
