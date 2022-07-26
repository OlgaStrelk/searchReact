import React from 'react'

import "../styles/Input.css";

export default function Input({ handleChange, value }) {
  return (
    <input  onChange={handleChange} value={value} placeholder="Введите название пива или посмотрите все что есть" className="Input" />
  )
}