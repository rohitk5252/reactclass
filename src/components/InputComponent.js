import React from 'react'

const InputComponent = ({type, placeholder, label, value}) => {
  return (
    <div>
    <label>{label}</label>
    <input type={type} placeholder={placeholder} value={value}/>
    </div>
  )
}

export default InputComponent