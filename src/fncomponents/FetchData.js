import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FetchData() { 
    const [posts,setPosts] = useState([])
    const [idFromButtonClick,setidFromButtonClick] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },)
  return (
    <div>
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    </div>
  )
}
