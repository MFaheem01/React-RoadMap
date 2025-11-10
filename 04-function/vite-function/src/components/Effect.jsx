import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [num, setnum] = useState(0)
    const [num2, setnum2] = useState(10)

    useEffect(() => {
        console.log("useEffect is running...");

    }, [])

    return (
        <div>
            <h1>value of num is {num}</h1>
            <h1>value of num1 is {num2}</h1>
            <button
                onMouseEnter={() => {
                    setnum(num + 1)
                }}
                onMouseLeave={() => {
                    setnum2(num2 + 10)

                }} className='p-2'>Effect</button>
        </div>
    )
}

export default Effect
