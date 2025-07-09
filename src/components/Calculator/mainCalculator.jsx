import { useState } from "react";

function MainCalculator() {
    const [value,setValue] = useState("")
    return ( <>
    console.log(value)

    <div className="flex flex-col justify-center items-center h-screen w-screen   container ">
        <h1 className="text-success text-4xl">Welcome to Calculator Example</h1>
        <div className="border-20 rounded-2xl shadow-5xl shadow-amber-500">
                
            <form action="">
                <div>
                    <input type="text" className="input" value={value}  />
                </div>
                <div className="pt-2 text-center ">
                    <input type="button" value={"AC"} className="btn btn-primary h-15 w-15 hover:bg-amber-500  " onClick={(e)=>setValue('')} />
                     <input type="button" value={"DE"} className="btn btn-primary h-15 w-15 hover:bg-amber-500 " onClick={(e)=>setValue(value.slice(0,-1))} />
                      <input type="button" value={"."} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={(e)=>setValue(value+e.target.value)}  />
                       <input type="button" value={"/"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)} />
                </div>
                <div className=" pt-2 text-center">
                    <input type="button" value={"7"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                     <input type="button" value={"8"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                      <input type="button" value={"9"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                       <input type="button" value={"*"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value={"4"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                     <input type="button" value={"5"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                      <input type="button" value={"6"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                       <input type="button" value={"+"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value={"1"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                     <input type="button" value={"2"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                      <input type="button" value={"3"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                       <input type="button" value={"-"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                </div>
                <div>
                    <input type="button" value={"00"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                     <input type="button" value={"0"} className="btn btn-primary h-15 w-15 hover:bg-amber-500" onClick={e=>setValue(value+e.target.value)}/>
                      <input type="button" value={"="} className="btn btn-success h-15 w-30 hover:bg-amber-500" onClick={e=>setValue(eval(value))} />
                  
                       
                </div>
            </form>
        </div>
    </div>
    </> );
}

export default MainCalculator;