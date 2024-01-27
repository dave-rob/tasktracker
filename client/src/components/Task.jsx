import { PencilIcon } from "@heroicons/react/24/outline";

const Task = (props) =>{
    return (
        <div className="bg-red-300 mx-1 px-1 border-red-800 border" >do stuff
        <PencilIcon className="float-right w-3 mx-1 py-1"/>
        </div>
    )
}

export default Task;