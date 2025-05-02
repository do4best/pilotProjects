import { useState } from "react";

function MainColor() {
    const [colors,setColors] = useState(['red,green,blue'])
        const handelColor=()=>{
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            document.body.style.background = randomColor;
     

            setColors(randomColor)
        }
    
    return (<>
  <div className="h-screen flex flex-col justify-center items-center">
    <div className="border h-50 w-100 rounded bg-gray-500 color-red-500 flex flex-col justify-center items-center">
        <h1 className="text-2xl">BackGround color is :</h1><br/>
        <h2 className="text-2xl">{colors}</h2>
    </div>
    <button className="btn btn-success mt-10" onClick={handelColor}>Press It</button>
  </div>
    </>  );
}

export default MainColor;