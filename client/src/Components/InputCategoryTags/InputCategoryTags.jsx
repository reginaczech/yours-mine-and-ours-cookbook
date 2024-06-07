import React, { useState } from "react";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import "./InputCategoryTags.css";

//Source: https://medium.com/how-to-react/how-to-create-a-tag-input-system-in-react-js-c49320f27151
//https://github.com/react-tags/react-tags?tab=readme-ov-file#suggestionsOption

const separators = [SEPARATORS.TAB, SEPARATORS.SPACE, SEPARATORS.ENTER];

const InputCategoryTags = ({ tags, setTags }, maxTags = 5) => {
  //TODO: add suggestions -> useState -> get from Category db

  // Method to delete tag from Array
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  // Method to Add tag into Array
  const handleAddition = (tag) => {
    // console.log(tag.id);
    // tag.id = "0";
    //TODO: add conditions - 1.if tag already exists 2.Show exisiting tags from database
    // if (tags.length < 1) {
    //   tag.id = "0";
    // } else {
    //   tag.id = String(Number(tag.id) + 1);
    // }
    setTags([...tags, tag]);
  };

  // console.log(tags);

  return (
    <>
      <div id="tags">
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
    </>
  );
};

export default InputCategoryTags;
