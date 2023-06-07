import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../selection/selection.css";
import DoneSection  from "../doneSelection/doneSelection";

function Selection() {
  const [showInput, setShowInput] = useState(false); // Hiển thị input mặc định ban đầu là false
  const [sectionName, setSectionName] = useState(""); // set Tên section ban đầu là rỗng
  const [sectionList, setSectionList] = useState([]);

  function handleClick() { // Hàm hiển thị input khi người dùng nhập vào
    setShowInput(true); // khi này setShowInput = true và gán true cho showInput = true
  }

  function handleHide() { // hàm ẩn ô input khi người dùng click cancel
    setShowInput(false); // khi này setShowInput = false và gán true cho showInput = false
    setSectionName(""); // Tên section khi đó sẽ set lại từ đầu = " ", 
                        // nhưng dữ liệu vẫn được lưu trong state dữ liệu ko mất cho tới khi reload
  }

  function handleChange(event) { // hàm thay đổi giá trị trong ô input
    setSectionName(event.target.value);
  }

  function handleAddSection() { // hàm thêm section 
    if (sectionName.trim() !== "") {
      setSectionList([...sectionList, sectionName]);
      console.log(sectionList)
      // Perform the action to add the section
      console.log("Section Name:", sectionName);
    }
  }

  return (
    <>
    <div className="wrapper1">
        {sectionList.map((section, index) => (
          <DoneSection key={index} sectionName={section} />
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
            <a
              className={`btn_addSection ${
                sectionName.trim() === "" ? "" : "active"
              }`}
              onClick={handleAddSection}
            >
              Add Section
            </a>
            <a className="btn_cancel" onClick={handleHide}>
              Cancel
            </a>
          </div>
        </div>
      ) : (
        <div className={`icon-container ${showInput ? "show-input" : ""}`} onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#b15daa" }} />
          <span className="title_section">Add section</span>
        </div>
      )}

      
    </>
  );
}


export default Selection;
