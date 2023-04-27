import React from 'react'
import Cartimg from './img/cart4.svg'

const Cartwidget = () => {
  return (
<button type="button" className="btn btn-primary">
 <img src={Cartimg} alt="Carrito" /> <span className="badge text-bg-primary">1</span>
</button>
  )
}

export default Cartwidget