import React, { useState } from 'react'

import car1 from "../../assets/images/cars/bmw1.png"
import car2 from "../../assets/images/cars/bmw2.png"
import car3 from "../../assets/images/cars/bmw3.png"
import car4 from "../../assets/images/cars/BMW-car-2.png"
import car5 from "../../assets/images/cars/volks1.png"
import car6 from "../../assets/images/cars/volks2.png"
import Car from '../../Car/Car'

const Cars = () => {
  const [cars, setCars] = useState([
    { id: 1, image: car1, price: 2000000, onSale: true, name: "BMW iX3 " },
    { id: 2, image: car2, price: 9800000, onSale: true, name: "BMW i7" },
    { id: 3, image: car3, price: 2700000, onSale: true, name: "BMW 2 Series" },
    { id: 4, image: car4, price: 2950000, onSale: true, name: "BMW 3 Series" },
    { id: 5, image: car5, price: 4500000, onSale: true, name: "Volkswagen Touareg (SUV)" },
    { id: 6, image: car6, price: 4400000, onSale: true, name: "Volkswagen Arteon" }
  ])
  return (
    <div>
      <h2 className='text-center py-2'>🚘السيارات</h2>
      <div className="container">
        <div className="row g-3">
          {cars.map((car,i) => <Car car={car} key={i} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Cars