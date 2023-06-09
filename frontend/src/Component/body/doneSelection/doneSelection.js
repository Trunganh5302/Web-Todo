import React, { useState, useRef, useEffect } from "react";
import "../doneSelection/doneSelection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function DoneSection({ sectionName }) {
  const [sectionName, setSectionName] = useState("");
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setSectionName(data[0].name); // Lấy name từ dữ liệu đầu tiên trong data.json
        }
      })
      .catch((error) => { 
        console.error(error);
      });
  }, []);
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShowBox(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="boxContent" ref={boxRef}>
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
              {/* Other <a> elements */}
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
