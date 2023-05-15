import React, { useState,useEffect } from 'react'

export default function IntervalHookCounter() {
    const [count,setCount] = useState(0)
    const tick = () => {
        setCount(count+1)
    }
    function fn2(interval) {
        clearInterval(interval)
    }

    function fn1() {
        const interval = setInterval(tick,1000)
        // return fn2(interval)
        return ()=>{
            clearInterval(interval)
        }
    }

    useEffect(fn1,[])   //

  return (
    <div>
      {count}
    </div>
  )
}
