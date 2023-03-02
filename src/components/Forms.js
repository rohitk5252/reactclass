import React, { useState } from 'react'
import InputComponent from './InputComponent'

const Form = () => {
    const [inputs, setInputs] = useState([{
        type: "text",
        label: "name",
        placeholder: "Name",
        value: ""
    }, {
        type: "number",
        label: "mobile",
        placeholder: "Number",
        value: ""
    }, {
        type: "date",
        label: "Date of birth",
        placeholder: "Date of birth",
        value: ""
    }])


  return (
    inputs.map((obj, i) => {
        return <InputComponent key={i} type={obj.type} placeholder={obj.placeholder} label={obj.label} value={obj.value}/>
    })
  )
}

export default Forms