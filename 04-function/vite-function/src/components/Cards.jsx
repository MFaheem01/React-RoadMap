import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className='flex flex-row'>
                <div className='border-2 w-[300px] p-4 flex mb-2 flex-row rounded-3xl'>
                    <div className='card w-full p-2 text-center'>
                        <div className='card-title'>
                            <h1 className="text-xl font-bold text-black">{props.name}</h1>
                        </div>
                        <div className='card-img'>
                            <img
                                className='rounded-2xl mt-2 h-55 m-auto' src={props.cardimgse}
                                alt="Unsplash"
                            />
                        </div>
                        <div className='card-body mt-6'>
                            <h1 className="text-lg font-semibold text-black">{props.sentax}</h1>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <button className='border p-2 mt-3 rounded bg-gray-800 text-white'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cards