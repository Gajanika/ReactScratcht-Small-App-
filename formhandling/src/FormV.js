import React, { useState } from "react";

const FormV = () => {

    const [name,setName]=useState("");
    const[error,setError]=useState("");

    const handleSubmit =() =>{
        if(name===""){
            setError("Name is required");
        }
        else{
            setError("");
            alert("Submitted:"+name);

        }
    }
  return (
    <div>FormV
    <input type="text"
    placeholder="Enter name"
    value={name}
    onChange={(e)=>setName(e.target.value)}/>
<br></br>


{/* Error message */}
{error && <p style ={{color:"red"}}>{error}</p>}
<button onClick={handleSubmit}>
    Submit

</button>
</div>
  )
}

export default FormV