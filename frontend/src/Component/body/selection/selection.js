import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DoneSection from "../doneSelection/doneSelection";
import "../selection/selection.css";

function Selection() {
  const [showInput, setShowInput] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [sectionNames, setSectionNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const names = data.map((item) => item.name);
        setSectionNames(names);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        body: JSON.stringify({ data: { name: sectionName } }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to add section");
          }
          return response.json();
        })
        .then((data) => {
          setSectionNames([...sectionNames, sectionName]);
        })
        .catch((error) => {
          console.error(error);
        });

      setSectionName("");
    }
  }

  return (
    <>
      <div className="wrapper1">
        {sectionNames.map((section, index) => (
          <DoneSection data={section} key={index} />
        ))}
      </div>
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
