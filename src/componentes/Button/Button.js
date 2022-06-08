import React from 'react'
import style from '../../assets/styles/style.css'
export default function Button(props) {
  const title=props.title
  return (
    <button className='button' type="submit">{title}</button>
  )
}
