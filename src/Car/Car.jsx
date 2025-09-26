import React from 'react'

const Car = ({ car }) => {
  return (
    <div key={car.i} className="col-md-4 d-flex">
      <div className="item p-3  rounded-2 w-100 d-flex flex-column justify-content-between h-100 text-center">
        <img 
          src={car.image}
          className="w-100 object-fit-contain mb-3"
          alt={car.name || "carImage"}
          style={{ maxHeight: "200px" }}
        />
        <h2>السعر : <span className='text-warning'>{car.price.toLocaleString()}</span></h2>
                <h3 className="fs-3">{car.name}</h3>
      </div>
    </div>
  )
}

export default Car
