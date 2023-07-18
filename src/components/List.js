import { useEffect, useState } from "react";
import './css/list.css'

function List({todoList,changeList, removeItem}){

    const [list,setList]=useState(todoList);
    

    const handleChange=(id,completed)=>{
        changeList(id,completed);
    }

    const handleClickRemove=(id)=>{
        removeItem(id);
    }

    const handleCheckChange=(event)=>{
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
          } else {
            console.log('⛔️ Checkbox is NOT checked');
          }
    }

    useEffect(()=>{
        setList(todoList);
    },[todoList])

    
    const notCompleted= todoList.filter((todo)=>{
        return !todo.completed
    })

    const renderedTodos=list.map((todo)=>{
        return <div key={todo.id} className="listItems">
                    <div className="round" onClick={()=>handleChange(todo.id,todo.completed)}>
                        <input className="toggle" type="checkbox"  checked={todo.completed} onChange={handleCheckChange}/>
                        <label htmlFor="checkbox"></label>
                    </div>
                    <label style={todo.completed?{margin:'auto', overflow:'hidden', textDecoration:'line-through'}:
                                                { margin:'auto', overflow:'hidden', textDecoration:'none'}}>{todo.label}</label>
					<button className="destroy" onClick={()=>handleClickRemove(todo.id)}>x</button>
        </div>
    });

    
    const handleClickAll=()=>{
        setList(todoList);
    }

    const handleClickActive=()=>{
        setList(todoList.filter((todo)=>{
            return !todo.completed
        }));    
        
    }

    const handleClickCompleted=()=>{
        setList(todoList.filter((todo)=>{
            return todo.completed
        }));  
    }

    return (
        <div className="list">
            {renderedTodos}
            {
                todoList.length!==0?<div className="filter">
                                        <label>{notCompleted.length} items left </label>
                                        <div className="buttons">
                                            <button onClick={handleClickAll}>All</button>
                                            <button onClick={handleClickActive}>Active</button>
                                            <button onClick={handleClickCompleted}>Completed</button>
                                        </div>
                                        <span>{notCompleted.length===0?' Clear Completed':''}</span>
                                    </div>:''
            }
            
        </div>
    )

}

export default List;