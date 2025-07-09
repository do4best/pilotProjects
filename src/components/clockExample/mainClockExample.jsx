import { useEffect } from "react";
import { useState } from "react";

function MainClockExample() {
const [time,setTime] = useState(new Date())
const [date,setDate] =useState(new Date("Mar 25 2025"))
useEffect(()=>{
    const timer =setInterval(()=>{
        setTime(new Date())

    },1000)
    return ()=>clearInterval(timer)
},[])
const formatTime = time.toLocaleTimeString()
const todate = date.toLocaleDateString()

    return ( <>
    <div className="flex flex-col justify-center items-center mt-50 ">
    <div className=" flex flex-col justify-center items-center shadow-2xl rounded-2xl shadow-orange-600 h-100 w-150  bg-white">
    <h1 className="text-success text-center text-8xl ">{formatTime}</h1>
    <h1 className="text-success text-center text-8xl ">{todate}</h1>
  </div> </div> </> );
}

export default MainClockExample;