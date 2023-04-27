import React from 'react'
import Cartwidget from './Cartwidget'
import Navbaritem from './Navbaritem'
import Itemlistcontainer from '../ItemListContainer/Itemlistcontainer'

const Navbar = () => {

const items = ['Guitarras','Bajos','Amplificadores'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex">
    <a className="navbar-brand" href="#">Music-Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav p-2 flex-grow-1">  
        {items.map((texto) => 
            <Navbaritem text={texto}/>
        )}
      
      </ul>
      <Cartwidget/>
    </div>
  </div>
</nav>
  )
}

export default Navbar