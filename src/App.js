import "./App.css";
import React,{ useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(todos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status = e.target.checked;
                    }
                    return obj2
                  }

                  ))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                  setTodos(todos.filter(obj3=>{
                    let temp;
                    if(obj3.id!==obj.id){
                      temp = obj3
                    }
                    return temp
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}

        {
          todos.map((obj)=>{
            if(obj.status){
              return(<h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
