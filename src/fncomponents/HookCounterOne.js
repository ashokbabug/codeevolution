import React, { useState ,useEffect} from 'react'

export default function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    //useEffect executes even if name got change because it is also a state
    //We have to write a condition check to prevent executing conpletely
    const fn = ()=>{
        document.title = `Clicked ${count} times`
    }
    // const rn = () => {
    //     console.log('useEffect can be called any number of times')
    // }

    useEffect(fn,[count])   //fn runs only if there is a change in count state
    // useEffect(rn)
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={()=>{setCount(count+1)}}>Click {count} times</button>
    </div>
  )
}
