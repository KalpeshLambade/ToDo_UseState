import React, { useState } from "react";

export const Home = () => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState();

  const handelAddTodos = (e) => {
    setData(e.target.value);
  };

  const addTods = () => {
    setTodo([...todo, { ["todo"]: data, state: false }]);
  };

  const isClickPending = (i, e) => {
    let newData = [...todo];
    newData[i] = { todo: e.todo, state: true };
    setTodo(newData);
  };

  const delectTodo = (e, i) => {
    let neWtodo = todo;
    neWtodo.splice(i, 1);
    console.log(neWtodo, "here");
    setTodo(neWtodo);
    setData(""); 
  };

  const updateTodo = (i) => {
    let newData = [...todo];
    newData[i] = { todo: data, state: true };
    setTodo(newData);
    setData("");
  };

  console.log(todo);

  return (
    <>
      <h1>Add Todos</h1>
      <input type="text" name="addTodos" onChange={handelAddTodos} />
      <button onClick={addTods}>Add ToDos</button>

      <h1>All Todos</h1>
      {todo.length ? (
        todo.map((e, i) => (
          <div key={i}>
            <span>{e.todo}</span>
            {e.state ? (
              <button onClick={() => delectTodo(e, i)}>Delete</button>
            ) : (
              <button onClick={() => isClickPending(i, e)}>Pending</button>
            )}
            {/* <input type="text" onChange={handelAddTodos} />{" "}
            <button onClick={() => updateTodo(i)}>Update</button> */}
          </div>
        ))
      ) : (
        <div>no todo</div>
      )}
    </>
  );
};
