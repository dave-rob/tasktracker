import Task from "./Task";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
const Table = (props) => {
  const [tableTasks, setTableTasks] = useState({});

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

  console.log(tableTasks)
  return (
    <>
      {props.tables.map((table) => (
        <div key={table.id} className="bg-slate-800 col-span-2 mx-2 h-fit mt-5 pb-2 rounded-3xl">
          <h3 className="text-xl text-center py-2">{table.description}</h3>
          {/* Pass the tasks for the specific table as a prop to the Task component */}
          <Task key={table.id} tasks={tableTasks[table.id] || []} />
        <PlusCircleIcon className="float-right w-10 pt-2 pr-2 cursor-pointer hover:text-yellow-400"/>
        </div>
      ))}
    </>
  );
};

export default Table;