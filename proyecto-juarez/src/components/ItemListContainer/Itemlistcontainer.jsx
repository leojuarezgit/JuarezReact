import React from 'react'

const Itemlistcontainer = (props) => {
  return (
    <ol class="list-group list-group-numbered">
  <li class="list-group-item">{props.articulo1}</li>
  <li class="list-group-item">{props.articulo2}</li>
  <li class="list-group-item">{props.articulo3}</li>
</ol>
  )
}

export default Itemlistcontainer