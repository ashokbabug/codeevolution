//How to mimic componentWillUnmount()
import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
  const [display,setDisplay] = useState(true)

  //when You click on Toggle display button the component HookMouse unmount from the DOM tree
  

  return (
    <div>
      <button onClick={()=>{setDisplay(!display)}}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
