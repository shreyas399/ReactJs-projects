import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[password, setPassword]=useState("")
  const[number, numberAllowed]=useState(false)
  const[chare, charAllowed]=useState(false)
  const[length,setLength]=useState(8)

  const passwordRef=useRef(null)

 const generatePassword= useCallback(()=>
{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWHYXabcdefghijklmnopqrstuvwxyz"
  

  if(number==true)
  {
    str+="0123456789"
  }

  if(chare==true)
  {
    str+="@#$%^&*()+"
  }


  for(let i=0;i<length;i++)
  {
    const char=Math.round(Math.random()*str.length)
    pass+=str.charAt(char)
  }
  setPassword(pass)
},[number,chare,length] )

useEffect( 
  ()=>{
    generatePassword()

},[length,chare,number])

  

  
  

  return (
    <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500'>
      <h1 className='text-white text-center  my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        readOnly
        className='outline-none w-full py-1 px-3'
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={()=>
          {
            window.navigator.clipboard.writeText(password)
            passwordRef.current.select()
            
          }
        }>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="range" min={8} max={30} value={length} className='cursor-pointer' onChange={ (e)=>{setLength(e.target.value) }}/>
        <label htmlFor='length'>Length: {length}</label>

            <div className='flex text-sm gap-x-2'>
            <input type="Checkbox" 
            defaultChecked={number}
            onChange={ ()=>
            {
              numberAllowed( (prev)=>!prev)
            }
            }
            />
            <label htmlFor='length'>Numbers</label>
            </div>


                <div className='flex text-sm gap-x-2'>
                <input type="Checkbox"
                 
                defaultChecked={chare}
                onChange={()=>
                {
                  charAllowed((prev)=>!prev)
                }}
                
                />
                <label htmlFor='char'>Character</label>

              </div>

        
      </div>

    </div>
  )
}

export default App
