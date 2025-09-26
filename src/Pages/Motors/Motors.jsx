import React, { useState } from 'react'
import bike1 from "../../assets/images/moto/tnt150.png"
import bike2 from "../../assets/images/moto/vlrsport200.png"
import bike3 from "../../assets/images/moto/scooter.webp"
import bike4 from "../../assets/images/moto/TRK500.webp"
import bike5 from "../../assets/images/moto/TRK502.webp"
import bike6 from "../../assets/images/moto/vlm200.png"
import Motor from '../../Motor/Motor'

const Motors = () => {
  const [motors, setMotors] = useState([
    {id:1,image:bike1,price:80000,onSale:false,name:"Tnt150"},
    {id:2,image:bike4,price:180000,onSale:false,name:"TRK500"},
    {id:3,image:bike5,price:190000,onSale:false,name:"Trk502"},
    {id:4,image:bike6,price:70000,onSale:false,name:"Vlm200"},
    {id:5,image:bike2,price:750000,onSale:false,name:"vlrSport200"},
    {id:6,image:bike3,price:80000,onSale:false,name:"scooter"},
  ])
  return (
    <div>
      <h2 className='text-center py-2'>الموتوسكلات 🏍️</h2>
      <div className="container">
        <div className="row g-3">
          {motors.map((motor,i)=><Motor motor={motor} key={i}/>)}
        </div>
      </div>
    </div>
  )
}

export default Motors