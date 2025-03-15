import React, { useState } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Action/action";
import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";
import { toast, ToastContainer } from "react-toastify";
function CustomComponent1() {
    return (
      <div >
        <span>Successfully Added</span>
      
      </div>
    );
  }
const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("ALL");
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAddTodo = () => {
        if (inputValue.trim() !== "") {
            const existingTodo = todos.find(
                (todo) => todo.text.toLowerCase() === inputValue.toLowerCase()
            );
             toast(CustomComponent1, { 
                  style:{backgroundColor:"black",color:"white"}
                });
            if (!existingTodo) {
                setTimeout(()=>{
                dispatch(addTodo(inputValue));
            },1000)
                setInputValue("");
                setSearch(""); 
            } else {
                alert("This todo already exists.");
            }
        }
    };

    
    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500); // Reset after animation duration
    };

    // Filter todos based on selected filter and search input
    const filteredTodos = todos.filter((todo) => {
        const matchesFilter =
            filter === "COMPLETED"
                ? todo.completed
                : filter === "INCOMPLETE"
                ? !todo.completed
                : true;

        const matchesSearch = todo.text
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="w-5/6 mx-auto  p-4 border-t-2  border-t-slate-800">
            <div className="flex">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your todo"
                    className="flex-grow p-2 focus:outline-none border-b-2 focus:border-b-slate-800"
                />
                <button
                    onClick={() => {
                        handleAddTodo();
                        triggerAnimation();
                    }}
                    className={`text-slate-900 text-4xl p-1 ml-2 ${
                        isAnimating ? "animate-bounce" : ""
                    }`}
                >
                    <BsArrowRightSquareFill />
                </button>
            </div>
            <div>
                <FilterButton setSearch={setSearch} setFilter={setFilter} />
            </div>
            <div>
                {filteredTodos.length === 0 ? (
                    <p className="text-center text-slate-900 mt-4 animate-bounce">No todos found</p>
                ) : (
                    <TodoItem filteredTodos={filteredTodos} />
                )}
            </div>
           
        </div>
    );
};

export default Todo;
