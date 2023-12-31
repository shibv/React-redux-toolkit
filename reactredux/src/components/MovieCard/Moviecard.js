import React from 'react'
import "./Moviecard.css"

const Moviecard = (props) => {
  const {data} = props;
  console.log(data.Title)
  
  return (
    <div className='card-item'>
      
     
     <div className="card-inner">
      <div className="card-top">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
     </div>
    
    </div>
  )
}

export default Moviecard
