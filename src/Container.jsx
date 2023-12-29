import React from "react";

function Container ({work,key,tasks,setTasks}) {
    
    const DeleteTask = ()=>{
        setTasks(tasks.filter(task => (work !== task)));
    }

    return (
        <>
        <div className="container">
            <p className="task">{work}</p>
            <button className="Delete-btn" onClick={DeleteTask}>Delete</button>
         </div>
        </>
    )
}

export default Container;