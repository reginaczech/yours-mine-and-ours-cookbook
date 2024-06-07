import React, { useState } from "react";

const InstructionList = ({ instructionList, setInstructionList }) => {
  // const [instructionInput, setInstructionInput] = useState([]);

  // const handleInputChange = (event) => {
  //   setInstructionInput(event.target.value);
  // };

  const handleAdd = () => {
    // setFormData({...instructionList, ''})
    setInstructionList([...instructionList, { ing: "" }]);
  };

  const handleRemove = (index) => {
    const list = [...instructionList];
    console.log(list);
    list.splice(index, 1);
    setInstructionList(list);
  };

  const handleInstructChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...instructionList];
    console.log(list);
    list[index][name] = value;
    setInstructionList(list);
  };

  return (
    <>
      <div>
        <label htmlFor="instructItem">Instructions:</label>
        <ol>
          {instructionList.map((instruction, index) => (
            <li key={index} className="instruction">
              <div className="inputInstruction">
                <input
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
      {/* <div className="instruction-List">
        <input
          type="text"
          name="instructionInput"
          value={instructionInput}
          onChange={handleInputChange}
        />
        <button className="addInstrucBtn" onClick={onAdd}>
          +
        </button>
        <ol>
          {instructionList &&
            instructionList.map((instructItem) => <li>{instructItem}</li>)}
        </ol>
      </div> */}
    </>
  );
};

export default InstructionList;
