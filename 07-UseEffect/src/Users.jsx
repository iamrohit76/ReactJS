import React, { useState, useEffect } from 'react'

function Users() {
    const [users, SetUsers] = useState([]);
   

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => SetUsers(json))
    },[])

  return (  
    <div>
      <h2>User List</h2>
      <ol>
        {users.map((ele)=> <li key={ele.id}>{ele.name}</li>)}
      </ol>
    </div>
  )
}

export default Users
