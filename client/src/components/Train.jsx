import React from 'react'
import { useNavigate } from "react-router-dom"
function Train({ train }) {
  
  const navigate = useNavigate()
  return (
    <div className='card p-2'>
      <h1 className="text-lg">{ train.name }</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <p className="text-sm">Från</p>
          <p className="text-sm">{ train.from }</p>
        </div>
        <div>
          <p className="text-sm">Till</p>
          <p className="text-sm">{ train.to }</p>
        </div>
        <div>
          <p className="text-sm">Pris</p>
          <p className="text-sm">{ train.price } SEK</p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-end">
        <div>
          <p className="text-sm">Datum</p>
          <p className="text-sm">{ train.journeyDate.slice(0, 10) }</p>
        </div>

        <h1 className="text-lg underline" onClick={ () => {
          navigate(`/book-now/${train._id}`)
        }}>Boka</h1>
      </div>
    </div>
  )
}

export default Train
