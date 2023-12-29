import React, { useEffect, useState } from 'react';
import Container from './Container';

function Input() {
    const [text , setText] = useState("");
    const [tasks , setTasks] = useState([]);
    const TextEditor= (e) =>{
        setText(e.target.value);
    }

    useEffect(() =>{
        if(localStorage.getItem('tasks') !== null)
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    },[]); 

    useEffect(() => {
        if (tasks?.length !== 0) {
            localStorage.setItem('tasks',JSON.stringify(tasks));
          }
    },[tasks?.length]);

    const enterSubmit = (e)=>{
        if (e.key=== 'Enter') {
            setTasks([...tasks,text]);
            setText("");
        }
    }

    const submit = ()=>{
        setTasks([...tasks,text]);
        setText("");
    }    

    return ( 
        <>
        <div className="input-area">
            <input value={text} onKeyDown={enterSubmit} type="text" className="input-box" placeholder='Enter the task' onChange={TextEditor} />
            <button className='add-btn' onClick={submit}>Add</button>
        </div>
        <div className="taskContainer">
            {tasks.map( (task)=> (
                <Container 
                    work={task}
                    key = {task.id} 
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}
        </div>
        </>
    )
}

export default Input;