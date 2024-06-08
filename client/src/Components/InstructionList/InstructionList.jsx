import React, { useState } from "react";

const InstructionList = ({ instructionList, setInstructionList }) => {

  const handleAdd = () => {
    setInstructionList([...instructionList, { instructItem: "" }]);
  };

  const handleRemove = (index) => {
    const list = [...instructionList];
    list.splice(index, 1);
    setInstructionList(list);
  };

  const handleInstructChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...instructionList];
    list[index][name] = value;
    setInstructionList(list);
  };

  return (
    <>
      <div className="dynamic-instruction-container">
        <label htmlFor="instructItem">Instructions:</label>
        <ol>
          {instructionList.map((instruction, index) => (
            <li key={index} className="instruction">
              <div className="inputInstruction">
                <textarea
                  type="text"
                  name="instructItem"
                  id="instructItem"
                  value={instruction.instructItem}
                  onChange={(event) => handleInstructChange(event, index)}
                  required
                />
                {instructionList.length - 1 === index && (
                  <button
                    type="button"
                    className="addInstructBtn"
                    onClick={handleAdd}
                  >
                    +
                  </button>
                )}
              </div>
              <div className="removeInstruction">
                {instructionList.length > 1 && (
                  <button
                    type="button"
                    className="removeInstructBtn"
                    onClick={() => handleRemove(index)}
                  >
                    🗑️
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default InstructionList;
