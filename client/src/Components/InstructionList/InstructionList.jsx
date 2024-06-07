import React, { useState } from 'react'
import InstructionListItem from '../InstructionListItem/InstructionListItem'
import InputInstructions from '../InputInstructions/InputInstructions'

const InstructionList = () => {
  const [instructions, setInstructions] = useState([])

  return (
    <div className='total-ingredient-list-container'>
      <InputInstructions />
    </div>
  )
}

export default InstructionList;

      // <ol>
      // {instructList.length > 0 && instructList.map((instruction) => {
      //   <li>      </li>
      // })}

      // </ol>
      // <button onClick={handleClick}>+</button>
