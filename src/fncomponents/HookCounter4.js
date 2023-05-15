import React, { useState } from 'react'

export default function HookCounter4() {
  const [items,setIntems] = useState([])
  function addItem() {
    //arrays are also objects with numbers in javascript
    setIntems([...items ,{id:items.length,value:Math.floor(Math.random()*10)+1}])
  }
  return (
    <div>
        <button onClick={addItem}> Add a number</button>
        <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </ul>
      
    </div>
  )
}
