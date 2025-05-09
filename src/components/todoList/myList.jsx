import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";
function Mylist({list,handelClick,handelDelete}) {
    return ( 
        <ul >
            {list.map((list)=><li className={`flex flex-row  justify-around items-center p-5 m-5 border rounded-3xl ${list.done} ? "bg-red-500":'' `} key={list.id}>
            
                <span>{list.item}</span>
                <div className="flex gap-5">
                    {list.done ?<MdCancel size={25} onClick={()=>(handelClick(list.id))}/>:<span><MdDeleteForever size={25} onClick={()=>(handelClick(list.id))} /></span>}
                <span><FaEdit size={25} onClick={()=>handelDelete(list.id)}/></span>
                </div>
            </li>)}
        </ul>
     );
}

export default Mylist;