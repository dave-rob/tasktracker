import { useState } from "react"
import axios from "axios";

export default function WorkspaceModal(props){
    const [newWorkspace, setNewWorkspace] = useState('');

    function createWorkspace(e){
        setNewWorkspace(e.target.value)

        if(e.key === 'Enter'){
            createNewWorkspace()
        }
    }

    // console.log(newWorkspace)

    function createNewWorkspace(){
        axios.post(`/api/workspaces/${props.userId}`, {name: newWorkspace})
            .then(res => {
                //console.log(res.data)
                props.addWorkspace(res.data[0]);
                props.modal(false);
            })
    }

    return (
        <div className="flex overflow-y-auto overflow-x-hidden z-50 absolute justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-xl">
    <div className="relative p-4 w-full max-w-md max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
          
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Workspace
                </h3>
                <button type="button" onClick={() => props.modal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" onChange = {createWorkspace} onKeyDown={createWorkspace} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="New workspace" required="" />
                    </div>
                </div>
                <button onClick={createNewWorkspace} className="text-slate-900 inline-flex items-center bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Add new workspace
                </button>
    
        </div>
    </div>
</div>
    )
}