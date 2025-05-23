import { useState, useEffect } from "react";

export default function Clock({lang="en-CA"}){
    // const date = useState[0];
    // const setDate = useState[1];
    //Same as above
    // const [date, setDate]=useState(new Date());
    const [date, setDate]=useState(null);
    console.log("Rendering Clock");

    useEffect(()=>{
        console.log("RENDERING EFFECT")
        setDate(new Date());
        
        const intervalID = setInterval(()=>{
            setDate(new Date);
        },1000);

        return()=>{ //clean up effect
            console.log("Clean up");
            clearInterval(intervalID);
        };
    },[/*variables will be passed in here*/]); //Execute this effect once at start



    return(
        <>
        {date?.toLocaleTimeString(lang)}
        <br />
        <hr />
        </>
    );
}