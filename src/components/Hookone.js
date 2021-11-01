import React ,{ useState } from 'react'

function Hookone() {
    const [name,setName]=useState("ram");
    return (
        <div>
            <center>
                <h1>
                    {name}
                </h1>
                <button onClick={()=>setName("Ramsurya")}>change</button>
            </center>
            
        </div>
    )
}

export default Hookone
