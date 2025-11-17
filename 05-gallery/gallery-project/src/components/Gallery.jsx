import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {

    const [UserData, setUserData] = useState([])

    const [NextPre, setNextPre] = useState(1)


    const getData = async () => {
        let response = await axios.get(`https://picsum.photos/v2/list?page=${NextPre}&limit=20`)
        setUserData(response.data)

    }
    useEffect(() => {
        getData()
    }, [NextPre])


    let printUserData = 'user data not found'
    if (UserData.lenght > 0) {
        printUserData = UserData.map((elem) => {
            return <div key={elem.id} className='mt-4'>
                <a href="elem.url" target='_blank'>
                    <div className='w-50 h-40 bg-amber-50 rounded-xl overflow-hidden'>
                        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
                    </div>
                    <h2>{elem.author}</h2>
                </a>
            </div>
        })

    }



    return (
        <>
            <div className='flex flex-wrap gap-5 justify-center'>
                {printUserData}
            </div>
            <div className='flex justify-center gap-4 m-8'>
                <button className='cursor-pointer rounded-2xl px-4 py-2 text-center border-amber-300 bg-amber-500' onClick={() => {
                    if (NextPre > 1) {
                        setNextPre(NextPre - 1)
                    }
                }}>previous</button>
                <h4>page {NextPre}</h4>
                <button className='cursor-pointer rounded-2xl px-4 py-2 text-center border-amber-300 bg-amber-500' onClick={() => {
                    setNextPre(NextPre + 1)
                }}>next</button>
            </div>
        </>
    )
}

export default Gallery