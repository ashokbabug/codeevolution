import React, { useState } from 'react'

export default function HookCounter3() {
    const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <div>
      <form>
        <input type="text" 
        value={name.firstName} 
        onChange={e => setName({...name,firstName:e.target.value})} />
        <br/>
        <input type="text"
         value={name.lastName}
         onChange={e => setName({...name,lastName:e.target.value})}/>
      </form>
      <h2>Your First Name is - {name.firstName}</h2>
      <h2>Your Last Name is - {name.lastName}</h2>
    </div>
  )
}
