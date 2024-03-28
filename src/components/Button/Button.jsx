import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
const Button = ({ buttonClass, content, forwardContent, onclickProp }) => {
  return (

    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={forwardContent}>
      <button onClick={onclickProp}  type='button' className={buttonClass}>{content}</button>
    </Link>

  )
}

export default Button
