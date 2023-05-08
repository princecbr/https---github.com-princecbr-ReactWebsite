import React from "react";
function Mybutton(){



    return(
        <button> I'm a button.</button>
    )
}
export default function MyApp()
{
    return(
        <div>
            <p>Welcome to my app</p>
            <Mybutton/>
        </div>
        
    )
}