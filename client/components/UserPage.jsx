import { useState, useEffect } from "react";
import Header from "./Header"
import Table from "./Table"
import WorkspaceModal from "./NewWorkspaceModal";
import WorkspaceTitle from "./WorkspaceTitle";
import Workspace from "./Workspace";
import ListModal from "./NewListModal";
export default function UserPage(props){

    const[currentWorkspace, setCurrentWorkspace] = useState('');
    const[allWorkspaces, setAllWorkspaces] = useState({})
    const [workspaces, setWorkspaces] = useState([])
    const [showModal, setShowModal] =useState(false)

    useEffect(() => {
        fetch(`/api/workspaces/${props.userId}`)
          .then((res) => {
            return res.json()
          })
          .then((workspace) => {
            setWorkspaces(workspace);
            //console.log(workspace)
            
          });
      }, []);

    function addNewWorkspace(response){
        setWorkspaces((prevWorkspaces) => ([
            ...prevWorkspaces,
            response
        ]));
    }


    
    function selectWorkspace(response){
        setCurrentWorkspace('');
        setCurrentWorkspace(response);
    }

    function createNewWorkspace(response){
        setShowModal(response)
    }


    return (
    <>
    <Header workspaces={workspaces} modal ={createNewWorkspace} authenticated = {props.authenticated} logOut={props.logOut} selectWorkspace={selectWorkspace} /> 
    {currentWorkspace? <Workspace currentWorkspace={currentWorkspace} /> : 
    <div className=" flex flex-col bg-slate-900 h-screen">
    <div className=" w-1/2 m-auto flex flex-col justify-center bg-slate-600 border rounded-3xl ">
      <h1 className="text-3xl mt-5 mb-10 mx-2 text-center">Get started by selecting a workplace or creating one.</h1>
    {/* <button className="border rounded-xl w-fit m-auto px-2 py-2 mb-2 bg-yellow-400 text-slate-700 hover:bg-yellow-200">Create your first workspace</button> */}
    </div>
    
    </div>}
    
    {showModal ? <WorkspaceModal modal={createNewWorkspace} addWorkspace={addNewWorkspace} userId={props.userId} /> : <></>}</>)
    // {showListModal ? <ListModal listModal={createNewWorkspace} addWorkspace={addNewWorkspace} userId={props.userId} /> : <></>}</>)
}