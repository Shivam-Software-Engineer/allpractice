import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";


export default function Home() {

  let [pass, setPass] = useState(false)
  let [count, setCount] = useState(1)
  let [model, setModel] = useState(false)
  return (

    <>
    
    
    <div className='max-w-[1120px] mx-auto mt-[70px] mb-[50px]'>
      <h2 className='text-[50px] mt-4 bg-amber-300 '>
        Home page
      </h2>


      <h1>1. Show hide feature</h1>
       <div className=' border-1 flex justify-between'>
        
        <input type={ pass ? "text" : "password" } className='px-2 w-[100%]'/>
        <button onClick={ ()=> setPass( !pass ) } className='p-2 px-4 text-2xl bg-cyan-200 ' >{ pass ? <FaEyeSlash /> : <IoEyeSharp /> }</button>
      </div>

      <div className='mt-4  text-center'>
            <h1 className='text-start'>2. useState</h1>
            <h1 className='p-5 border-1 w-[5%] mx-auto'>{count}</h1>
            <div className='flex justify-around w-[20%] mx-auto mt-[10px] text-2xl'>
              <button onClick={ ()=>setCount(count-1) } className='bg-red-400 px-5 py-2 shadow-lg'>-</button>
              <button onClick={ ()=>setCount(count+1) } className='bg-green-400 px-5 py-2 shadow-lg'>+</button>
            </div>
      </div>

      <div className='mt-7  text-center'>
            <button onClick={ ()=> setModel(true) } className="bg-gray-400 px-5 py-2 shadow-lg">Register</button>
      </div>    
           
          <div className={`w-[600px] h-[400px] z-99 duration-1000 bg-cyan-400 text-center fixed left-[50%] ${ model ? "top-[50%]" : "top-[-100%]" }  translate-[-50%]`}>
            <h1 className='py-4'>Regiter Here</h1> <span onClick={ ()=> setModel(false) } className='absolute right-0 top-0 cursor-pointer px-4 text-[25px]'>&times;</span>
            <hr />
          </div>

      

     

    </div>
    </>
  )
}
