import React from 'react'

export default function Input({ handleChange, value }) {
  return (
    <input  onChange={handleChange} value={value} placeholder="Search bear" className="Input"/>
  )
}