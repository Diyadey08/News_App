import React, { useEffect, useState } from 'react'
import News from './News'
function Newsbox(props) {
  const [info,setInfo]=useState([]);
  const [page,setPage]=useState(1);
  const handleScroll=async ()=>{
    try {
     if (window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
      setPage((prev)=>prev+1);
     }
    } catch (error) {
      console.log(error)
    }
  }
  const getData=async ()=>{
    const url=await fetch(`https://newsapi.org/v2/everything?q=${props.type}&apiKey=f04edb6d724e44b9bd9d95ee0ac738db&page=${page}&pageSize=12`);
    const data=await url.json();
    setInfo((prev)=>[...prev,...data.articles]);
  }
  useEffect(()=>{
    getData();
  },[page])
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <>
    <div className="flex justify-center flex-wrap gap-10 mt-8">
    {info.map((i)=>{
        return <News img={i.urlToImage} description={i.description.length>80?i.description.slice(0,80)+"...":i.description} title={i.title.length>40?i.title.slice(0,40)+"....":i.title} url={i.url}/>
    })}
    </div>
    </>
  )
}

export default Newsbox