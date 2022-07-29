import React from 'react'

import "../styles/Input.scss";

export default function Input({ handleChange, value }) {
  return (
    <input  onChange={handleChange} value={value} placeholder="Введите название пива" className="input" required={true} />
  )
}