import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function Nav() {
  const [view,setView]=useState(false)
  const [menu,setMenu]=useState(1)

  return (
    <div className='z-20 sticky top-0 flex w-screen justify-between items-center shadow-md bg-slate-200 h-[4rem]'>
        <div className="flex items-center">
            <img src="https://tse4.mm.bing.net/th?id=OIP.3mmQsq6WQyG0LI_VJj1zAQHaGV&pid=Api&P=0&h=220" alt="" className="ml-2 rounded-full h-10 w-10 shadow-sm" />
            <p className=" text-base font-thin ml-3 ">Taaza Khaabar</p>
        </div>
        <ul className={view?'z-20 bg-slate-200 flex-col justify-evenly absolute md:static md:w-[35rem] md:flex-row flex mt-[18rem] w-screen md:mt-0 md:border border-2 h-[15rem] md:h-fit':'z-20 bg-slate-200 flex-col justify-evenly absolute md:static md:w-[35rem] md:flex-row mt-[18rem] w-screen md:mt-0 md:border border-2 h-[15rem] md:h-fit md:flex hidden'}> 
            <Link onClick={()=>{setView(!view); 
              setMenu(1)}} to="/" className={`text-slate-700 ml-12 md:ml-0 flex ${menu==1?'text-blue-700':''}`}><GoHome className="md:hidden block mt-1"/>Home</Link>
            <Link onClick={()=>{setView(!view);
              setMenu(2)}} to="/health" className={`text-slate-700 ml-12 md:ml-0 flex ${menu==2?'text-blue-700':''}`}><MdOutlineHealthAndSafety className="md:hidden block mt-1"/>Health</Link>
            <Link onClick={()=>{setView(!view);
              setMenu(3)}} to="/sports" className={`text-slate-700 ml-12 md:ml-0 flex ${menu==3?'text-blue-700':''}`}><MdOutlineSportsCricket  className="md:hidden block mt-1"/>Sports</Link>
            <Link onClick={()=>{setView(!view);
              setMenu(4)}} to="/science" className={`text-slate-700 ml-12 md:ml-0 flex ${menu==4?'text-blue-700':''}`}><GiMaterialsScience className="md:hidden block mt-1"/>Science</Link>

        </ul>
        <button className='md:hidden mr-4 scale-150' onClick={()=>{setView(!view)}}>{view?<IoMdClose />:<RxHamburgerMenu />}</button>
    </div>
  )
}

export default Nav