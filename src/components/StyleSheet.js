import React from 'react'
import './myStyles.css'
function StyleSheet(props) {
    let className = props.primary ?'primary':'';
    // className is a string with in the object
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheet</h1>
    </div>
  )
}

export default StyleSheet
