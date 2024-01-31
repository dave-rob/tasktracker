import { PencilIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useDrag } from 'react-dnd';
import { useState } from "react";
import axios from "axios";

const DraggableTask = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

function rightClick(e){
  e.preventDefault()
  if(e.target.classList.contains("line-through")){
    e.target.classList.remove("line-through")
  axios.patch(`/api/tasks/${task.id}`,{
        done: false,
      }).then(response => console.log(response.data))
  } else{
  e.target.classList.add("line-through")
  axios.patch(`/api/tasks/${task.id}`,{
        done: true,
      }).then(response => console.log(response.data))
    }
}

  function editButton(event){
    event.target.contentEditable= true;
    if(event.key === 'Enter'){
      event.target.contentEditable= false;
      //console.log(task.id, event.target.innerText)
      
    }
  }


  return (
    <>
    {task.done ? <div ref={drag} className="line-through bg-slate-500 mx-1 px-2 py-2 my-1 border-slate-900 border" onDoubleClick={editButton} onKeyDown={editButton} onContextMenu={rightClick}>
      {task.description}

      {/* <ArrowDownTrayIcon className="float-right w-3 mx-1 py-1" onClick={editButton} /> */}
    </div> :<div ref={drag} className=" bg-slate-500 mx-1 px-2 py-2 my-1 border-slate-900 border" onDoubleClick={editButton} onKeyDown={editButton} onContextMenu={rightClick}>
      {task.description}

      {/* <ArrowDownTrayIcon className="float-right w-3 mx-1 py-1" onClick={editButton} /> */}
    </div>}
    </>
  );
};

const Task = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <DraggableTask key={task.id} task={task} />
      ))}
    </>
  );
};

export default Task;