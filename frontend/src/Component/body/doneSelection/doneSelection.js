import React, { useState } from "react";
import "../doneSelection/doneSelection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function DoneSection({ sectionName }) {
  const [showBox, setShowBox] = useState(false);

  function handleToggleBox() {
    setShowBox(!showBox);
  }

  return (
    <div className="wrapperContainer">
      <div className="containerSection">
        <div className="headSection">
          <p className="titleSection">{sectionName}</p>
          <span className="numTask">1</span>
        </div>
        <a className="SectionMenu" onClick={handleToggleBox}>
          ***
        </a>
        {showBox && (
          <div className="overlay" onClick={handleToggleBox}>
            <div className="boxContent">
              <div className="itemOption">
                <FontAwesomeIcon icon={faPenToSquare} />
                <p className="textItem">Edit section</p>
              </div>
              <div className="itemOption">
                <FontAwesomeIcon icon={faCopy} />
                <p className="textItem">Duplicate section</p>
              </div>
              <div className="itemOption">
                <FontAwesomeIcon icon={faTrash} />
                <p className="textItem">Delete section</p>
              </div>
              {/* Các phần tử <a> khác */}
            </div>
          </div>
        )}
      </div>
      <div className="addTask">
        <FontAwesomeIcon icon={faPlus} />
        <p className="titleTask">Add task</p>
      </div>
    </div>
  );
}

export default DoneSection;
