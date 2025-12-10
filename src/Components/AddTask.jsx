import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [taskName, setTaskName] = useState("");
    const handleInputChange = (e) =>{
        setTaskName(e.target.value)
    }

    const handleAddTask = () =>{
        onAdd(taskName);
        setTaskName("");
    }
    return(
        <div>
            <input type="text" className="border p-2 rounded" value={taskName} onChange={handleInputChange} />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" disabled={taskName.trim() === ""} onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default AddTask;