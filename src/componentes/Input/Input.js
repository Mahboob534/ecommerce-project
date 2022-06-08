import React from 'react'
import style from '../../assets/styles/style.css'
export default function Input(props) {
    const name=props.name
    const type=props.type
    const value=props.value
  return (
    <input
              name={name}
              type={type}
              value={value}
              className="input"
            />
  )
}
