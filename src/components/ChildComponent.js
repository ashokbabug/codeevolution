import React from 'react'

function ChildComponent(props) {
    // props can be variables or functions
  return (
    <div>
      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
