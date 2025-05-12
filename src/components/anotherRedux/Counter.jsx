import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (<>

    <button className="btn btn-primary" onClick={()=>dispatch(increment())} > + </button>
     <button className="btn btn-primary" onClick={()=>dispatch(decrement())} > - </button>
     <h1>{count}</h1>
    
    </>  );
}

export default Counter;