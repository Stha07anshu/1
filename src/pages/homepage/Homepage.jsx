import React, { useEffect } from "react";
import { testApi } from "../../api/Api";

const Homepage =( )=>{

    useEffect(() =>{
        console.log("Hello")

        testApi().then((res) => {
            console.log(res)
        })
    })
    return (
        <div>
            <h1> Its Homepage!</h1>
        </div>
    );
}

//export
export default Homepage;