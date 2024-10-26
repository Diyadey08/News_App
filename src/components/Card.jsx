import React from 'react'

function Card(props) {
  return (
    <div className="h-[29rem] w-[25rem] rounded-md bg-white shadow-md ml-8 mt-8 flex flex-col items-center border-2 border-gray-200 ">
    <img src={props.img} alt="" className="h-60 w-60 shadow-sm mt-3" />
    <p className='text-slate-800 font-bold text-2xl mt-2' >
   {props.name}
    </p>
    <div className='flex gap-x-28 mt-4'>
    <p className='text-slate-900 font-bold w-1/5 mt-4 text-4xl'>
   {props.price}
    </p> 
        <button className='text-slate-50 h-10 bg-blue-700 mt-5 px-4 py-1 rounded-md hover:bg-blue-800 transition-all'>Add to cart</button>
    </div>
</div>
  )
}

export default Card