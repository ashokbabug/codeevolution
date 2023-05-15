import React from 'react'
// for inline styles create an object with key is camelCased and value is string
const heading= {
    fontSize:'72px',
    color:'blue'
}
function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
