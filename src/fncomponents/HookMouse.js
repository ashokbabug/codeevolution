// How to mimic componentDidMount() with useEffect Hook
import React, { useEffect, useState } from 'react'

export default function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logMousePosition = (e) => {
        console.log('Mouse Event')
        setX(e.clientX) 
        setY(e.clientY)
    }
    function componentWillUnmountMimic() {
        console.log('Component Unounting')
        window.removeEventListener('mousemove',logMousePosition)

    }

    useEffect(()=> {
        console.log('UseEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return componentWillUnmountMimic   // return function will act as componentWillUnmount


    },[])
  return (
    <div>
      <h1>X coOdinate - {x} Y CoOrdinate - {y}</h1>
    </div>
  )
}
