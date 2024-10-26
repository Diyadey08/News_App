import React from 'react'

function Dropdown() {
  return (
    <>
 <button className="px-2 py-2 ml-10 mt-4 md:bg-orange-500 bg-orange-200 rounded-md peer/menu">Dropdown</button>
<ul className=' hidden hover:block peer-hover/menu:block bg-slate-50  w-[20rem] ml-10 cursor-pointer'>
    <li className=' px-3 py-2 w-[20rem] hover:bg-slate-100'>list 1</li>
    <li className='hover:bg-slate-100 px-3 py-2 w-[20rem]'>list 2</li>
    <li className='hover:bg-slate-100 px-3 py-2 w-[20rem]'>list 3</li>
    <li className='hover:bg-slate-100 px-3 py-2 w-[20rem]'>list 4</li>
    <li className='hover:bg-slate-100 px-3 py-2 w-[20rem]'>list 5</li>
</ul>
 </>
  )
}

export default Dropdown