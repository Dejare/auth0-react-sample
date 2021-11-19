import React from 'react'

const Input = ({label, type, placeholder}) => {
    return (
        <>
          <input type={type} label=
          {label} placeholder={placeholder} />  
        </>
    )
}

export default Input