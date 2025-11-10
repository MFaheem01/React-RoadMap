import React from 'react'

const Local = () => {
    localStorage.setItem("name","faheem")
    localStorage.setItem("age","20")
    return (
        <>
            <h1 className='text-3xl text-center mb-14'>Local storage example </h1>
            <hr />

        </>
    )
}

export default Local