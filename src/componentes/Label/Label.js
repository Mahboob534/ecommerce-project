import React from 'react'
import style from '../../assets/styles/style.css'
export default function Label(props) {
  const forLabel = props. htmlFor
  const title = props.title
  return (
    <label className='label' htmlFor={forLabel}>*{title}</label>
  )
}
