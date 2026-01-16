
import React, { useState } from "react";
const Form = () => {


    const [name, setName] = useState("");

    return (
    <div>Form
    <input type="text"
    placeholdre="Enter name"
    value={name}
    onChange={(e)=>setName(e.target.value)}/>
       
        <br></br>
        <button onClick={()=>alert(name)}>
submit
        </button>

</div>

    )
}

export default Form