import React from 'react'
import type { ButtonProps } from '../types'


const Button: React.FC<ButtonProps> = ({ label, type }) => {
    const style = type === "primary" ? "bg-blue-500" : type === "secondary" ? "bg-gray-500" : type === "danger" ? "bg-red-500" : "";
  return (
    <button className={`${style} text-white py-2 px-4 rounded`}>
      {label}
    </button>
  )
}

export default Button