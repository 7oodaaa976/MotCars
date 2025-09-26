import React from 'react'

const Motor = ({ motor }) => {
  return (
    <div key={motor.i} className="col-md-4 d-flex">
      <div className="item p-3 rounded-3 w-100 d-flex flex-column justify-content-between align-items-center text-white">
        <img
          src={motor.image} 
          className="w-100 flex-grow-1 object-fit-contain mb-3"
          alt={motor.name || "motor"}
        />
        <h2>السعر : <span className='text-warning'>{motor.price.toLocaleString()} EGP </span></h2>
        <h3 className="fs-3">{motor.name}</h3>
      </div>
    </div>
  )
}

export default Motor
