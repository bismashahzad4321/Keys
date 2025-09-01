import React from 'react'

const Prop = ({ data: { id, name } }) => {
  return (
    <div className='mainDiv'>
      <div>{id}</div>
      <div>{name}</div>
    </div>
  )
}

export default Prop


