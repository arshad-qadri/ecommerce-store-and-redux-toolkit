import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/reducers/todo";

function App() {
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(null);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo_data);

  const handleAdd = (e) => {
    const id = new Date().getTime().toString();
    e.preventDefault();
    dispatch(addTodo({ id, todo }));
    setTodo("");
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const handleEdit = (item) => {
    setEdit(item);
    setTodo(item.todo);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("ed", edit);
    dispatch(updateTodo({ id: edit.id, todo }));
    setTodo("");
    setEdit(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            type="text"
            placeholder="add todo here...!"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={!edit ? handleAdd : handleUpdate}>
            {edit ? "Update" : "Add"}
          </button>
        </form>
        <br />
        {todos &&
          todos.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>{item.todo}</p>
              <button onClick={() => handleEdit(item)}>edit</button>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
