import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import './components/css/app.css';

function App() {
  let [check,setCheck]=useState(true);
  const [todoList,setTodoList]=useState([]);

  const handleClick=(todo)=>{
    setTodoList(()=>{
      return [...todoList,todo]
    });

  }

  const handleChange=(todoId,todoCompleted)=>{
    const newList=todoList.map((td)=>{
      if(td.id===todoId){
        return {  ...td,
          completed:!todoCompleted
        };
      }

      return td;
    });
    setTodoList(newList);
  }

  const listRemoveItem=(id)=>{
    const updatedList=todoList.filter((todo)=>{
      return todo.id!==id;
    })
    setTodoList(updatedList);
  }

  const checkItems=()=>{
    if(check){
    const updatedCheck=todoList.map((todo)=>{

        return {  ...todo,
          completed:true
        };
      });

      setTodoList(updatedCheck);
      setCheck(false);

    }else{
      const updatedCheck=todoList.map((todo)=>{
        
        return {  ...todo,
          completed:false
        };
      });

      setTodoList(updatedCheck);
      setCheck(true);
    }
  }

  return (

    <div className="container">
      <h1 style={{color:'brown'}}>todos</h1>
      <div className="formList">
        <Form handleClick={handleClick} handleCheck={checkItems}/>
        <List todoList={todoList} changeList={handleChange} removeItem={listRemoveItem}/>
      
      </div>
      
    </div>
  );
}

export default App;
