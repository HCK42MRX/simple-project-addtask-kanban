import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import AddTask from "../Components/AddTask";
import Navbar from "../Components/Navbar";
import TaskCard from "../Components/TaskCard";
import { useFetch } from "../hooks/useFetch";

const HomePage = () =>{

  const [tasks, setTasks] = useState([]);
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  useEffect(() => {
    if(data && data.length > 0){
      const mappedTasks = data.slice(0,5).map(item => ({
        id: item.id,
        title: item.title,
        priority: "medium"
      }));
      setTasks(mappedTasks);
    }
    if(error){  
      console.error("Error fetching tasks:", error);
    }
  }, [data, error])


  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      title: text,
      priority: "Medium"
    }
    setTasks([...tasks, newTask]);
  }

  const reorder = (list, startIndex, end) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(end, 0, removed);
    return result;
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasks(reorderedTasks);
};

return (
  <div className="p-6"> {/* Tambah padding biar rapi */}
    <Navbar />
    <AddTask onAdd={addTask} />

    {/* ZONA DRAG & DROP */}
    {loading && <p>Loading tasks...</p>}
    <DragDropContext onDragEnd={handleDragEnd}>
      
      <Droppable droppableId="list-tugas">
        {(provided) => (
          <div 
             className="space-y-4 mt-8" // Jarak antar kartu
             {...provided.droppableProps} 
             ref={provided.innerRef}
          >
            {tasks.map(({ id, title, priority }, index) => ( // BUTUH INDEX DI SINI
              
              <Draggable key={id} draggableId={id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                     {/* KARTU ASLI KITA */}
                     <TaskCard title={title} priority={priority} />
                  </div>
                )}
              </Draggable>

            ))}
            {provided.placeholder} {/* Ruang kosong saat digeser */}
          </div>
        )}
      </Droppable>

    </DragDropContext>
  </div>
);
}
    
export default HomePage;