import React, { useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filterTodo, markAllCompleteTodo, markAllInCompleteTodo } from "../Redux/Action/action";

const FilterButton = ({ setFilter, setSearch }) => {
    const dispatch = useDispatch();
    const [filter, setTodo] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        setTodo(selectedFilter);
        setFilter(selectedFilter);
        dispatch(filterTodo(selectedFilter));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = (e) => {
        setSearch(searchTerm);
        setSearchTerm("");
        triggeredButton(e);
    };

    const markAllCompleted = (e) => {
        dispatch(markAllCompleteTodo());
        triggeredButton(e);
    };

    const markAllIncomplete = (e) => {
        dispatch(markAllInCompleteTodo());
        triggeredButton(e);
    };

    // Function to trigger animation by adding a class temporarily
    const triggeredButton = (event)=>{
        const button = event.currentTarget

        button.classList.add("animate-bounce");

        setTimeout(()=>{
         button.classList.remove("animate-bounce");
        },500)
    }
    return (
        <div className="flex flex-col sm:flex-row mt-3 max-md:flex-col max-md:items-center  justify-between max-sm:m-2">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0">
                <select 
                    value={filter} 
                    onChange={handleFilterChange} 
                    className="py-1.5 px-2 border rounded mb-2 bg-black hover:bg-slate-800 text-white sm:mb-0 sm:mr-2"
                >
                    <option value="ALL">Default</option>
                    <option value="COMPLETED">Complete</option>
                    <option value="INCOMPLETE">Incomplete</option>
                
                </select>
                <button 
                    className="bg-black text-white rounded mb-2 sm:mb-0 sm:mr-2 px-2 py-1  hover:text-slate-200 hover:bg-slate-800" 
                    onClick={markAllCompleted}
                >
                    Mark All Completed
                </button>
                <button 
                    className="bg-black text-white rounded mb-2 sm:mb-0 px-2 py-1 hover:text-slate-200 hover:bg-slate-800" 
                    onClick={markAllIncomplete}
                >
                    Mark All Incomplete
                </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
                <input 
                    type="text" 
                    value={searchTerm} 
                    placeholder="Search todos..." 
                    onChange={handleSearchChange} 
                    className="p-1 border rounded mb-2 sm:mb-0 sm:mr-2"
                />
                <button 
                    className="p-2 bg-black text-white rounded" 
                    onClick={handleSearchClick}
                >
                    <BsFillSearchHeartFill />
                </button>
            </div>
        </div>
    );
};

export default FilterButton;
