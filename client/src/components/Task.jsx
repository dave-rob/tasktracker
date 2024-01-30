import { PencilIcon } from "@heroicons/react/24/outline";
import { useDrag } from 'react-dnd';


const Task = (props) => {


  return (
    <>
    {props.tasks.map((task) => {
      const [ {isDragging}, drag] = useDrag({
        type: 'TASK',
        item: { id: task.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });

      return (
        <div key={task.id} ref={drag} className="bg-slate-500 mx-1 px-2 py-2 my-1 border-slate-900 border">
          {task.description}
          <PencilIcon className="float-right w-3 mx-1 py-1" />
        </div>
      );
    })}
  </>
  );
};

export default Task;

// import { PencilIcon } from "@heroicons/react/24/outline";
// import { useDrag } from 'react-dnd';

// const Task = (props) => {

//   return (
//     <>
//       {props.tasks.map((task) => {
//         const [ {isDragging}, drag] = useDrag({
//           type: 'TASK',
//           item: { id: task.id },
//           collect: (monitor) => ({
//             isDragging: !!monitor.isDragging(),
//           }),
//         });

//         return (
//           <div key={task.id} ref={drag} className="bg-slate-500 mx-1 px-2 py-2 my-1 border-slate-900 border">
//             {task.description}
//             <PencilIcon className="float-right w-3 mx-1 py-1" />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Task;