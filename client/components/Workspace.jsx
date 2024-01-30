import WorkspaceTitle from "./WorkspaceTitle"
import Table from "./Table"
import { useEffect, useState } from "react"
import ListModal from "./NewListModal";
export default function Workspace(props){
    //console.log(props.currentWorkspace);
    
    const [tables, setTables] = useState([])
    const [showModal, setShowModal] = useState(false)

    //console.log(props.currentWorkspace)
    useEffect(() => {
        fetch(`/api/lists/${props.currentWorkspace.id}`)
      .then((res) => {
        return res.json()
      })
      .then((table) => {
        //console.log(table);
        setTables(table)
        //console.log(workspace)
        
      });
    
  }, [props.currentWorkspace]);
    


  function createNewList(response){
      setShowModal(response)
    }
    
    function addNewList(response){
      setTables((prevTables) => ([
          ...prevTables,
          response
      ]));
  }
  //console.log(tables)
    return (
        <>
            <WorkspaceTitle workspace={props.currentWorkspace} modal ={createNewList} />
        <section className=" bg-gradient-to-r from-black to-yellow-400 h-screen grid lg:grid-cols-12 px-10 md:grid-cols-6 ">
          {tables? <Table tables={tables} workspace_id={props.currentWorkspace.id} /> : ''} 
        </section>
        {showModal ? <ListModal modal={createNewList} addList={addNewList} workspaceId={props.currentWorkspace.id} /> : <> </>}
        </>
    )
}