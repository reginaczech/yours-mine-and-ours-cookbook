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
        <label
          htmlFor="instructItem"
          className="block text-sm font-medium leading-6 text-theme-dark-grey"
        >
          Instructions:
        </label>
        <ol className="list-decimal pl-6">
          {instructionList.map((instruction, index) => (
            <li key={index}>
              <div className="flex flex-row content-center">
                <input
                  type="text"
                  name="instructItem"
                  id="instructItem"
                  value={instruction.instructItem}
                  className="block mx-2 my-3 w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-dark-yellow sm:text-sm sm:leading-6"
                  onChange={(event) => handleInstructChange(event, index)}
                  required
                />
                <div className="flex mx-2">
                  {instructionList.length > 1 && (
                    <button
                      type="button"
                      className="content-center"
                      onClick={() => handleRemove(index)}
                    >
                      ✖️
                    </button>
                  )}
                </div>
              </div>
              {instructionList.length - 1 === index && (
                <button
                  type="button"
                  className="text-3xl pb-2 font-bold w-10 h-10 text-theme-offwhite bg-theme-dark-yellow rounded-full border-2 border-theme-light-grey hover:bg-theme-light-grey"
                  onClick={handleAdd}
                >
                  ＋
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default InstructionList;
