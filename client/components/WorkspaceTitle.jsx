
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
export default function WorkspaceTitle(props){
    console.log(props.workspace)
    return (
        <>
            <nav className="grid grid-cols-12 text-2xl pl-3 py-3 bg-gradient-to-r from-gray-800 to-yellow-500">
    {props.workspace ? <h2 className="col-span-3">{props.workspace.name}</h2> : <h2 className="col-span-3">Open up a workspace</h2>}
    <button className=" col-start-11 w-fit col-span-1 bg-white text-gray-800 border rounded-lg text-lg px-2" onClick={() => props.modal(true)}>
    <PlusCircleIcon className="h-6  text-gray-800 hover:text-yellow-600 float-left pr-2" aria-hidden="true" ></PlusCircleIcon>
    Create new
    </button>
    </nav>
        </>
    )
}