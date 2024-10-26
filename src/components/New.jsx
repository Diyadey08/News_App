import React from 'react'

function New(props) {
  return (
    <div className='h-[24rem] w-[18rem] rounded-md bg-slate-50 shadow-md ml-8 mt-8 flex flex-col items-center'>
        <img className='h-20 w-20 rounded-full shadow-sm mt-3' src={props.img} alt="" />
        <p className='text-slate-900 font-mono font-bold text-xl mt-2' >
       {props.name}
        </p>
        
        <p className='text-slate-600 font-mono w-4/5 mt-2 text-center'>
        {props.description}
        </p>
        <div className='flex items-center justify-evenly w-full mt-6'>
            <button className='text-slate-200 bg-blue-700 px-3 py-1 rounded-md hover:bg-blue-800 transition-all'>Add friend</button>
            <button className='shadow-md px-3 py-1 rounded-md text-slate-800'>Message</button>
        </div>
    </div>
  )
} 

export default New