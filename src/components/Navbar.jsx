import { Button } from 'react-bootstrap'
import React from 'react'

const Navbar = () => {
  let total = 25000;
  let totalMiles = total.toLocaleString();
  const token = false;
  return (
    <div className='PNavbar'>
      <div className='PNavbar_1'>
          <p className='Nav_logo'>Pizzería Mamma Mía!</p>
          <Button variant="outline-light" size="sm">Home</Button>
          {token ? (
            // Si está logueado, muestra los botones de Profile y Logout
            <>
              <Button variant="outline-light" size="sm">Profile</Button>
              <Button variant="outline-light" size="sm">Logout</Button>
            </>
          ) : (
            // Si no está logueado, muestra los botones de Login y Register
            <>
              <Button variant="outline-light" size="sm">Login</Button>
              <Button variant="outline-light" size="sm">Register</Button>
            </>
          )}           
      </div>
      <div className='PNavbar_2'>
        <Button variant="outline-light" size="sm">Total: ${total}</Button>
      </div>
    </div>
  )
}

export default Navbar