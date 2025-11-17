import React from 'react'

import Cards from './components/Cards'



const App = () => {

  let cardsDeta = [
    {
      cardimgse: "https://images.unsplash.com/photo-1760891494704-bd9fabef4757?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      name: "unsplice",
      sentax: "Images From Unsplash-1"
    },
    {
      cardimgse: "https://images.unsplash.com/photo-1760681554261-e8ad3e7a4981?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      name: "unskplice",
      sentax: "Images From Unsplash-2"
    },
    {
      cardimgse: "https://images.unsplash.com/photo-1761026533058-1c0080104977?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=5000",
      name: "unsplice",
      sentax: "Images From Unsplash-3"
    },
    {
      cardimgse: "https://images.unsplash.com/photo-1760662052295-f84068499a03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      name: "unsplice",
      sentax: "Images From Unsplash-4"
    },
  ]

  return (
    <>

      {/* <div className='flex'>
        <button className='p-5 m-11 rounded-2xl' onClick={clickedbtn}>clicked Here</button>
        <input type="text" onChange={(elem) => {
          console.log(elem.target.value);

        }} className='p-3 m-11' placeholder='Enter Your Name' />

        <input className='p-3 m-11' onChange={(elem1) => {
          onChangeevent(elem1.target.value)
        }} type="text" placeholder='enter gmail' />

      </div> */}
      
      <div className='flex justify-between'>
        {cardsDeta.map((elems) => (
          <Cards name={elems.name} cardimgse={elems.cardimgse} sentax={elems.sentax} />
        ))
        }
      </div>
    </>
  )
}

export default App
