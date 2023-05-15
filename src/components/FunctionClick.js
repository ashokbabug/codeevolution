import React from 'react'

export default function FunctionClick() {
    function clickHandler(){
        console.log('button clicked')
    }
    // onclick should be in camelCase rather than smaller case in plain js
    // function should be in curly braces{} instead as a string in js
    // if you execute the the function with () then it will directly executed instead of executing onclick
    // In class component also it is exactly same but function is addressed with this keyword
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
