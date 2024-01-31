import Task from "./Task";
import { useEffect, useState } from "react";
import { PlusCircleIcon, ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import TaskModal from "./TaskModal";
import { useDrop } from 'react-dnd';
import axios from "axios";

const DropZone = ({ onDrop, tableId }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (task) => onDrop(task, tableId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className =" flex justify-center m-2 bg-gray-400 dark:bg-slate-700 text-center py-2" style={{  border: isOver ? '1px dotted white' : 'none' }}>
      <ArrowPathRoundedSquareIcon className="h-5 hover:text-yellow-400"/>
    </div>
  );
};

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
    //console.log(response);
    setTableTasks((prevTables) => ({
        ...prevTables,
        [response.list_id]: [...prevTables[response.list_id], response]
  }));
}

  function selectTable(event){
    setCurrentTable(event.target.id)
    setShowModal(true)
  }



  const handleDrop = (task, targetTableId) => {
  
    // console.log(`Dropped task ${task.id} into table ${targetTableId} from ${task.list_id}`);
    axios.patch(`/api/tasks/${task.id}`, {
      list_id: targetTableId,
    }).then(response  => {
     // console.log(response.data[0].id)
      for( let x in tableTasks){
        for(let y in tableTasks[x]){
        if(tableTasks[x][y].id === response.data[0].id && tableTasks[x][y].list_id !== response.data[0].list_id){
          //console.log(`id ${response.data[0].id} old table is ${tableTasks[x][y].list_id }`)
          //console.log(tableTasks[x][y])
          tableTasks[x].splice(y,1)
        }
        }
        
      }
      addNewTask(response.data[0])
    })
    
  };
  

  return (
    <>
      {props.tables.map((table) => {
      
        return (
        <div key={table.id} className="bg-white dark:bg-slate-800 col-span-2 mx-2 h-fit mt-5 pb-2 rounded-3xl">
          <h3 className="text-xl text-center py-2">{table.description}</h3>
          {/* Pass the tasks for the specific table as a prop to the Task component */}
          <Task key={table.id} tableId={table.id} tasks={tableTasks[table.id] || []} />
        <DropZone onDrop={handleDrop} tableId={table.id} />
        <PlusCircleIcon id = {table.id} onClick={selectTable} className="float-right w-10 pt-2 pr-2 cursor-pointer hover:text-yellow-400"/>
        </div>
        
      )
      })}
      {showModal ? <TaskModal modal={createNewTask} addTask={addNewTask} tableId={currentTable} /> : <> </>}
    </>
  );
 };


export default Table;

