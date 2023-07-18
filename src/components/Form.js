import { useState } from "react";
import './css/form.css'

const firstTodos={id:0,label:'',completed:false}

function Form({handleClick,handleCheck}){
    const [todo,setTodo]=useState(firstTodos);

    const handleChange=(event)=>{

        setTodo((p)=>p={
            id:Math.round(Math.random()*1000000),
            label:event.target.value,
            completed:false,
        });    
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        handleClick(todo);
        setTodo({label:''})
    }

    const handleCheckItems=()=>{
        handleCheck();
    }

    return (
        <form onSubmit={handleSubmit} className="wrapper">
            <span className="icon" onClick={handleCheckItems}> &#709;</span>
            <input className="input" value={todo.label} placeholder="What needs to be done?" onChange={handleChange}/>
        </form>
    )

}

export default Form;