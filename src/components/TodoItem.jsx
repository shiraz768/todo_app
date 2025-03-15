import React, { useState } from "react";
import { BsToggleOff, BsToggleOn, BsFillTrashFill, BsCheckCircleFill, BsXSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../Redux/Action/action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomComponent() {
  return (
    <div >
      <span>Deleted Successfully</span>
    </div>
  );
}



const TodoItem = ({ filteredTodos }) => {
  const dispatch = useDispatch();
  const [deletingIndex, setDeletingIndex] = useState(null);

  const remove = (index, event) => {
    toast(CustomComponent, {   autoClose: 5000,
      style:{backgroundColor:"red",color:"white"}
    });

    setDeletingIndex(index);
    triggerButtonAnimation(event);

    setTimeout(() => {
      dispatch(removeTodo(index));
      setDeletingIndex(null);
    }, 1000); 
  };

  const toggle = (index, event) => {
    triggerButtonAnimation(event);
    dispatch(toggleTodo(index));
  };

  const triggerButtonAnimation = (event) => {
    const button = event.currentTarget;
    button.classList.add("animate-bounce");
    setTimeout(() => {
      button.classList.remove("animate-bounce");
    }, 500);
  };

  return (
    <div className="mt-5">
      <ul>
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between my-3 items-center ${
              deletingIndex === index ? "opacity-50" : "opacity-100"
            }`}
          >
            <div className="flex justify-center space-x-6">
              <div className="text-2xl">{index + 1}</div>
              <div className={`text-2xl ${todo.completed ? "line-through text-blue-400" : ""}`}>
                {todo.text}
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                className="text-sky-800 p-2 font-bold text-2xl rounded"
                onClick={(e) => toggle(index, e)}
                aria-label={`Toggle ${todo.text}`}
              >
                {todo.completed ? <BsToggleOn /> : <BsToggleOff />}
              </button>
              <button
                className="text-red-950 text-2xl px-2 rounded"
                onClick={(e) => remove(index, e)}
                aria-label={`Delete ${todo.text}`}
                disabled={deletingIndex === index}
              >
                <BsFillTrashFill />
              </button>
              <button
                className={`${
                  todo.completed
                    ? "text-green-900 p-2 text-2xl rounded"
                    : "text-yellow-400 p-2 text-2xl rounded"
                }`}
                onClick={(e) => triggerButtonAnimation(e)} 
                aria-label={`Status ${todo.text}`}
              >
                {todo.completed ? <BsCheckCircleFill /> : <BsXSquareFill />}
              </button>
            </div>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default TodoItem;
