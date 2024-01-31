
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
export default function WorkspaceTitle(props){
   // console.log(props.workspace)
    return (
        <>
            <nav className="grid md:grid-cols-12 grid-cols-6 text-2xl pl-3 py-3 bg-gradient-to-r from-gray-800 to-yellow-500 text-white">
    {props.workspace ? <h2 className="col-span-3">{props.workspace.name}</h2> : <h2 className="col-span-3">Open up a workspace</h2>}
    <button className=" border-slate-600 md:col-start-11 col-start-5 w-fit col-span-2 bg-slate-700 text-white border rounded-lg text-lg px-2" onClick={() => props.modal(true)}>
    <PlusCircleIcon className="h-6  text-white hover:text-yellow-600 float-left pr-2 my-1" aria-hidden="true" ></PlusCircleIcon>
    New Table
    </button>
    </nav>
        </>
    )
}