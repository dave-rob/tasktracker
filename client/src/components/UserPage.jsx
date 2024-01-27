import { useState, useEffect } from "react";
import Header from "./Header"
import Table from "./Table"

import WorkspaceTitle from "./WorkspaceTitle";
import Workspace from "./Workspace";
export default function UserPage(props){

    const[currentWorkspace, setCurrentWorkspace] = useState('');
    const[allWorkspaces, setAllWorkspaces] = useState({})
    const [workspaces, setWorkspaces] = useState([])
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

    function selectWorkspace(response){
        setCurrentWorkspace(response);
        // setAllWorkspaces((allWorkspaces) => ({...allWorkspaces, [response] : [workspaces[workspaces].name]}))
    }
    console.log(currentWorkspace)
    return (
    <>
    <Header workspaces={workspaces} authenticated = {props.authenticated} selectWorkspace={selectWorkspace} /> 
    <Workspace currentWorkspace={currentWorkspace} />
    </>)
}