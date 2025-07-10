import { useState } from "react";


function MainAnotherCalc() {
    const [calc,setCalc] = useState('')
    const [result,setResult] = useState('')
    const ops=['+','-','/','*','.']
    const updateCalc=value=>{
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }
        setCalc(calc+value)
        if(!ops.includes(value)){
            setResult(eval(calc + value).toString())
        }
    }
    const createDigts=()=>{
    let digits = [];
    for(let i=1; i<10; i++){
        digits.push(
            <button key={i} className="btn btn-success p-6 hover:bg-amber-600" onClick={()=>updateCalc(i.toString())}>{i}</button>
        )
    }
    return digits;
}
const calculate =()=>{
    setCalc(eval(calc.toString()))
}
const ondelete=()=>{
    if(calc == ''){
        return;
    }const value = calc.slice(0,-1)
    setCalc(value)
}
    return ( <>
    <div className="flex flex-col justify-center items-center">
    <h1>Another Main Calculator</h1>

    <div className=" max-w-[390px]  bg-white shadow-2xl shadow-green-600 ">
        <div className="p-10 bg-blend-darken text-2xl text-right text-red-300">
            {result?<span className="bg-black">({result})</span>:""}&nbsp;{calc || 0}
        </div>
        <div className="">
            <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={()=>updateCalc('/')}>/</button>
            <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={()=>updateCalc('*')}>*</button>
            <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={()=>updateCalc('+')}>+</button>
            <button className="btn btn-primary p-6 hover:bg-amber-600"onClick={()=>updateCalc('-')}>-</button>
             <button className="btn btn-primary px-11 py-6 hover:bg-amber-600" onClick={ondelete}>DEL</button>
        </div>
        <div className="">
        {createDigts()}
             <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={()=>updateCalc('0')}>0</button>
              <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={()=>updateCalc('.')}>.</button>
               <button className="btn btn-primary p-6 hover:bg-amber-600" onClick={calculate}>=</button>
        </div>
    </div></div>
    </> );
}

export default MainAnotherCalc;