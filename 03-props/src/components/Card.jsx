import React from 'react'

const Card = (props) => {
    console.log(props.user);
    
  return (
    <div>
        <div className="card">
        <h1>{props.user}</h1>
        <img src={props.img} alt="" className='img' />
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profiles</button>
      </div>
    </div>
  )
}

export default Card