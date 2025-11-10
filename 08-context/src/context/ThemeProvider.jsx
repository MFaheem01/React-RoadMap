import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = (props) => {
  const [Theme, setTheme] = useState('rgb(30,30,30)')

  const setRandomTheme = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${r}, ${g}, ${b})`
    setTheme(randomColor)
  }

  return (
    <div>
      {/* ThemeContext me dono bhej rahe hain: color aur setter */}
      <ThemeContext.Provider value={[Theme, setRandomTheme]}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
