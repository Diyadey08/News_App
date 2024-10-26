import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function News(props) {
  return (
    <div className="lg:w-[20rem] h-fit w-11/12 shadow-md mt-4 md:mt-10  bg-slate-100 border-2 border-gray-200 md:rounded-lg">
      <img src={props.img} alt="" className="h-[18rem] w-full md:rounded-t-lg"  />
      <p className="font-bold mt-3 mx-4 text-wrap text-2xl text-slate-950">
      {props.title}
      </p>
      <p className="text-wrap mx-4 mr-4 mt-2 text-slate-800 text-lg">
      {props.description}
      </p>
      <div className="mt-4 ml-2"><button className='bg-blue-800 text-slate-50 font-bold rounded-md px-3 py-2 hover hover:bg-blue-500 mb-2'><p className='flex'><a href={props.url} target='_blank'>Read More</a><FaArrowRight className='mt-1 ml-1'/></p></button></div>
    </div>    


)
}

export default News