import { useState } from 'react'

import './App.css'

function App() {
  const [color, useColor]=useState('olive')
  
    function changeColor(color)
    {
      
      useColor(color)
    }
  return (
    

    <div className='w-full h-screen duration-200 flex justify-center items-center' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
          <button onClick={()=>
            {
              changeColor('red')
            }
           }>Click </button>
        
          <button onClick={ ()=>
            {
              useColor('blue')
            }
           }>Click </button>
         
          <button onClick={()=>
            {
              useColor('green')
            }
          }>Click </button>
          {' '}  
        </div>
      </div>
     </div>
  )
}

export default App
