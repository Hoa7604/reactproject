import React from "react";

const asideStyle = {
    background : "red",
    width: "calc(30% - 10px)",
    marginLeft: "10px",
    padding: "10px"
}

function Main(){
    return (
        <aside style = {asideStyle}
            className="asideStyle">
            <h2>Sidebar content here!</h2>
        </aside>
    )
}

export default Main;