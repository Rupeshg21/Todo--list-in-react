import React,{useState} from 'react'



function Todo() {
    const [task,setTask]=useState([]);
    const [newtask,setNewtask]=useState("");

    function taskhandle(){
        if (newtask.trim()!==''){
            setTask([...task,newtask]);
            setNewtask("");
        }
    }

    function Deletetask(index){
        const update =task.filter((_,i)=>i!==index)
        setTask(update);
    }

    return (
    <div>
        <div className='head'>
        <h1>Todo List</h1>
        <input type='text' value={newtask} onChange={(e)=>setNewtask(e.target.value)} placeholder='add tast..'/>
        <button  className="add" onClick={taskhandle}>Add Task</button></div>
        <div className='card'>
        {
            
            task.map((tt,index)=>(<li key={index}>{tt}
            <button className='add'onClick={()=>Deletetask(index)}>Delete</button></li>
             ) )
            

        }

        </div>
    </div>
  )
}

export default Todo