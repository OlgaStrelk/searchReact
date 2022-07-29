import React from 'react'
import '../styles/Form.scss'

export default function Form({children, handleSubmit}) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
