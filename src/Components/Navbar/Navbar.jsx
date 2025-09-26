import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg fixed-top p-3">
  <div className="container">
    <Link className="logo" to="">MotCars</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-white " to="">الصفحة الرئيسية</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/about">عننا</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/cars">السيارات</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/motors">الموتوسكلات</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar