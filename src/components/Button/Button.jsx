import React from 'react'
import './Button.css'
const Button = ({buttonClass,content}) => {
  return (
    <button type='button' className={buttonClass}>{content}</button>
  )
}

export default Button
