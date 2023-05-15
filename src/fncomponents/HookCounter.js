import React, { useState } from 'react'

export default function HookCounter() {
    const [count,setCount] = useState(0)  //pass a default value to the hook
    //count is state variable and setCount is function to update like this.setState
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click {count}</button>
    </div>
  )
}
