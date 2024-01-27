import { PencilIcon } from "@heroicons/react/24/outline";

const Task = (props) => {
  console.log(props.tasks);

  return (
    <>
      {props.tasks.map((task) => (
        <div key={task.id} className="bg-slate-500 mx-1 px-2 py-2 my-1 border-slate-900 border">
          {task.description}
          <PencilIcon className="float-right w-3 mx-1 py-1" />
        </div>
      ))}
    </>
  );
};

export default Task;