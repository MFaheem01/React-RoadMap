import React from 'react'

const Navbar = ({ keyword, setKeyword,getTracks }) => {
    return (
        <>
            <div className='flex justify-evenly py-7'>
                <div className='text-xl font-bold'>
                    <h1>My Music App</h1>
                </div>
                <div className='placeholder'>
                    <input className='border font-semibold text-sm rounded w-100' type="text" onChange={(event) => { setKeyword(event.target.value) }} value={keyword} placeholder='Search Any Song...' />
                </div>
                <div className='border py-1 rounded font-light corsor-pointer px-5'>
                    <button className='cursor-pointer' onClick={getTracks}>Search Song</button>
                </div>
            </div>
        </>
    )
}

export default Navbar