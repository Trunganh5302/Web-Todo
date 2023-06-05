import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons';

function Selection() {
  const [showInput, setShowInput] = useState(false);

  function handleClick() {
    setShowInput(true)
  }
  return (
    <>
      <div>
        <div className="icon-container" onClick={handleClick}>
          <FontAwesomeIcon icon={faComment} />
          <span>Text</span>
        </div>
        {showInput && <input type="text" />}
      </div>
    </>
  );
}

export default Selection;
