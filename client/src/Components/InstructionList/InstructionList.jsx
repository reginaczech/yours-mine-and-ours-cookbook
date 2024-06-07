import React, { useState } from 'react'
import InstructionListItem from '../InstructionListItem/InstructionListItem'

const InstructionList = () => {
  const [instructList, setInstuctList] = useState([])

  const handleClick = () => {
    setInstuctList([...InstructionList, "text"])
  }

  return (
    <div className='total-ingredient-list-container'>
      <ol>
      {instructList.length > 0 && instructList.map((instruction) => {
        <li>      </li>
      })}

      </ol>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default InstructionList