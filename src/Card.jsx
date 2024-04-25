import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>{props.product.name }</div>

  )
}

export default Card