import Task from "./Task";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TaskModal from "./TaskModal";

const Table = (props) => {
  const [tableTasks, setTableTasks] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentTable, setCurrentTable] = useState('');

  useEffect(() => {
    // Fetch tasks for each table
    props.tables.forEach((table) => {
      fetch(`/api/tasks/${table.id}`)
        .then((res) => res.json())
        .then((tasks) => {
          // Update state using the table ID as the key
          setTableTasks((prevTableTasks) => ({
            ...prevTableTasks,
            [table.id]: tasks,
          }));
        })
        .catch((error) => console.error(`Error fetching tasks: ${error}`));
    });
  }, [props.tables]);

  function createNewTask(response){
    setShowModal(response)
  }
  
  function addNewTask(response){
    console.log(response);
    setTableTasks((prevTables) => ({
        ...prevTables,
        [response.list_id]: [...prevTables[response.list_id], response]
  }));
}

  function selectTable(event){
    setCurrentTable(event.target.id)
    setShowModal(true)
  }

// console.log(tableTasks)

  return (
    <>
      {props.tables.map((table) => (
        
        <div key={table.id} className="bg-slate-800 col-span-2 mx-2 h-fit mt-5 pb-2 rounded-3xl">
          <h3 className="text-xl text-center py-2">{table.description}</h3>
          {/* Pass the tasks for the specific table as a prop to the Task component */}
          <Task key={table.id} tableId={table.list_id} tasks={tableTasks[table.id] || []} />
        <PlusCircleIcon id = {table.id} onClick={selectTable} className="float-right w-10 pt-2 pr-2 cursor-pointer hover:text-yellow-400"/>
        </div>
      ))}
      {showModal ? <TaskModal modal={createNewTask} addTask={addNewTask} tableId={currentTable} /> : <> </>}
    </>
  );
};

export default Table;