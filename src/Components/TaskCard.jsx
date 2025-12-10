import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
const TaskCard = ({title, priority}) =>{
    
    const [status, setStatus] = useState("progress");
    const {theme} = useTheme();

    const handleStatusChange = () => {
        status === "progress" ? setStatus("completed") : setStatus("progress");
    }

    return(
        <div className={`p-4 mb-4 border rounded ${theme === "light" ? "bg-white" : "bg-gray-700"} text-${theme === "light" ? "black" : "white"}`}>
        <h3>Judul: {title}</h3>
        <p>Status: {status} | priority: {priority}</p>
        <button className={`px-2 py-1 rounded ${status === "progress" ? "bg-blue-500" : "bg-green-500"} text-white`} onClick={handleStatusChange}>Update</button>
        </div>
    )
};

export default TaskCard;