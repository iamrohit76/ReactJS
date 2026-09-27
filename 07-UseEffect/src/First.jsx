import React, { useState, useEffect } from 'react'

function First() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        document.title = `Count : ${count}`;
        console.log("Components re-render!")
    },[count])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default First
