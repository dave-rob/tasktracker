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
    <Header workspaces={workspaces} modal ={createNewWorkspace} authenticated = {props.authenticated} selectWorkspace={selectWorkspace} /> 
    {currentWorkspace? <Workspace currentWorkspace={currentWorkspace} /> : ''}
    
    {showModal ? <WorkspaceModal modal={createNewWorkspace} addWorkspace={addNewWorkspace} userId={props.userId} /> : <></>}</>)
    // {showListModal ? <ListModal listModal={createNewWorkspace} addWorkspace={addNewWorkspace} userId={props.userId} /> : <></>}</>)
}