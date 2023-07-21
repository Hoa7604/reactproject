import React from "react";
import BannerArea from './BannerArea.js';

// const styleMain = {
//     background : "yellow",
//     width: "calc(30% - 10px)",
//     marginLeft: "10px",
//     padding : "10px"
// }

function Main(props){
    return (
        <div>
            <BannerArea/>
             {/* <h1>Hello {props.userName} </h1> */}
            {/* <p>You're position No. {props.num}</p> */}
        </div>
       
    )
}

export default Main;