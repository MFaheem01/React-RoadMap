import React from 'react'
import { useState } from 'react'
import { Context } from './Context'

const ThemeProvider = (props) => {

    const [Theme, setTheme] = useState('rgb(30,30,30)')

    let setRandomTheme = () => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        let RandomColor = `rgb(${r},${g},${b})`
        setTheme(RandomColor)
    }


    return (
        <div>
            <Context.Provider value={[Theme, setRandomTheme]}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export default ThemeProvider