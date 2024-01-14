import React from 'react'

const API = ({userId,id,title}) => {
  return (
    <div>
        <h2>{userId}</h2>
        <h2>{id}</h2>
        <h2>{title}</h2>
    </div>
  )
}

export default API