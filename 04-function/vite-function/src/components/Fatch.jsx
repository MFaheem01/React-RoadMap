import React, { useState } from 'react'

import axios from 'axios'



const Fatch = () => {


    const [output, setoutput] = useState([])

    // fetch method

    // async function getData() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     let data = await response.json()
    //     console.log(data);

    // }

    // axos method


    const getData = async () => {
        const response = await axios.get("https://picsum.photos/v2/list")

        setoutput(response.data)

    }
    
    return (
        <>
            <h1 className='text-center mt-26 mb-7 text-5xl'>Fatch API Practice</h1>
            <div className='text-center'>
                <button onClick={getData} className='border-2 p-3 text-5xl rounded-3xl'>Get data</button>
            </div>

            <div>

                {output.map((elem, indx) => {
                    return <h3>hello API {elem.author} {indx}</h3>
                })}

            </div>
        </>
    )
}

export default Fatch
