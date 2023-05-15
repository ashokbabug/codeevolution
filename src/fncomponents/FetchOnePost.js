import React, { useEffect, useState } from 'react'
import axios from 'axios'
//we can do it with click event also but to understand useEffect we are doing it
export default function FetchOnePost() { 
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setidFromButtonClick] = useState(1)
    function handleClick() {
        setidFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)  //we can place id also here id and idFromButtonClick is same
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="text" onClick={handleClick} >Fetch Post</button>
        <br/>
        {post.title}
    </div>
  )
}
