import React from 'react'

// import "../styles/Form.css";

export default function Form({children, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
