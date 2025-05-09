import { motion } from "motion/react"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Mylist from "./myList";
import Button from '@mui/material/Button';
const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: 5,
}
function MainToDoList() {
    const [text,setText] = useState("")
    const [todoList,setTodoList] = useState([])
    const addItem=()=>{
       
        const newTodosItems = {id:uuidv4(),item:text,done:false}
setTodoList([...todoList,newTodosItems])
setText("")
    }
    const handelClick=(item)=>{
        const newTodoList =todoList.map((listItem)=>{
            if(listItem.id === item){
                return {...text,done:!listItem.done}
            }
            return listItem;
        })
        setTodoList(newTodoList)
    }
    const handelDelete=(deleteit)=>{
        const newtodos=todoList.filter((listfilter)=>listfilter.id !== deleteit)
        setTodoList(newtodos)
    }
    

    return ( <>
    <h1 className="text-center text-2xl mt-5">To Do List</h1>
    <div className="flex flex-col justify-center items-center">
    <fieldset className="fieldset ">
  <legend className="fieldset-legend">To Do List</legend>
  <input type="text" className="input" placeholder="Input Your To Dos" value={text} onChange={(e)=>setText(e.target.value)} />
  <button className="btn btn-primary" onClick={addItem}>Add Item</button>

</fieldset>



</div>
{todoList.length > 0&&<Mylist list={todoList} handelClick={handelClick} handelDelete={handelDelete} />}
    
    </> );
}

export default MainToDoList;