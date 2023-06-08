import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../selection/selection.css";

function Selection() {
  const [showInput, setShowInput] = useState(false);
  const [sectionName, setSectionName] = useState("");

  function handleClick() {
    setShowInput(true);
  }

  function handleHide() {
    setShowInput(false);
    setSectionName("");
  }

  function handleChange(event) {
    setSectionName(event.target.value);
  }

  function handleAddSection() {
    if (sectionName.trim() !== "") {
      fetch("http://localhost:8080/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { name: sectionName } }), // Send the data object with the section name
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add section");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });

      setSectionName("");
      console.log("Section Name:", sectionName);
    }
  }

  return (
    <>
      <div className="wrapper1"></div>
      {showInput ? (
        <div className="Action_add">
          <input
            type="text"
            className="input_section"
            placeholder="Name this section"
            value={sectionName}
            onChange={handleChange}
          />
          <div className="option">
            <button
              className={`btn_addSection ${
                sectionName.trim() === "" ? "" : "active"
              }`}
              onClick={handleAddSection}
            >
              Add Section
            </button>
            <button className="btn_cancel" onClick={handleHide}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`icon-container ${showInput ? "show-input" : ""}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faPlus} style={{ color: "#b15daa" }} />
          <span className="title_section">Add task</span>
        </div>
      )}
    </>
  );
}

export default Selection;
