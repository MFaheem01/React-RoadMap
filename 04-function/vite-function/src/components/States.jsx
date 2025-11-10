import React, { useState } from 'react'

const States = () => {

  const [first, setfirst] = useState([10, 20, 30, 40])

  const change= ()=>{
    const newNum =[...first]
    newNum.push(90)
    setfirst(newNum)
  }



  return (
    <div>

      <h1>{first}</h1>
      <button className='border-1 p-3 rounded-xl' onClick={change}> clicked this</button>
    </div>
  )
}

export default States