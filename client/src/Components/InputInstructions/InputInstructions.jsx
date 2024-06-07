import React, { useState } from "react";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";

const separators = [SEPARATORS.TAB, SEPARATORS.SPACE, SEPARATORS.ENTER];

const InputInstructions = ({ instructions, setInstructions }) => {


  
  instructions = tags;
  setInstructions = setTags;


  // Method to delete tag from Array
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  // Method to Add tag into Array
  const handleAddition = (tag) => {
    // console.log(instruction.id);
    // instruction.id = "1";
    //TODO: add conditions - 1.if tag already exists 2.Show exisiting tags from database
    if (tags.length < 1) {
      tag.id = "1";
    } else {
      tag.id = String(Number(tag.id) + 1);
    }
    setTags([...tags, tag]);
  };

  console.log(tags)

  return (
    <>
      <div id="instructionTag">
        <ReactTags
          tags={tags}
          separators={separators}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          inputFieldPosition="bottom"
          allowDragDrop={false}
          allowNew={true}
        />
      </div>
      <div className="tagIds">
        {tags &&
          tags.map((tag) => {
            return <h5>{tag.id}</h5>;
          })}
      </div>
    </>
  );
};

export default InputInstructions;
