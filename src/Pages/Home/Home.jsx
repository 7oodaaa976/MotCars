import React from 'react'
import { Link } from 'react-router';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center flex-column '>
      <h1>سيارات وموتوسكلات </h1>
      <p>شاهد احدث موديلات السيارات والموتوسكلات </p>
      <TypeAnimation
        sequence={[
          'شاهد احدث',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'شاهد احدث موديلات',
          2000,
          "شاهد احدث موديلات السيارات",
          1000,
          "والموتوسكلات",
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', fontStyle: 'italic' }}
        repeat={Infinity}
      />
      <div className='btns d-flex gap-3'>
        <Link  className='bg-danger px-4 rounded-3 text-decoration-none fs-1 text-warning' to="cars">سيارات</Link>
        <Link  className='bg-danger px-4 rounded-3 text-decoration-none fs-1 text-warning' to="motors">موتوسكلات</Link>


      </div>
    </div>

  )
}

export default Home