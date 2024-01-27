import WorkspaceTitle from "./WorkspaceTitle"
import Table from "./Table"
import { useEffect } from "react"
export default function Workspace(props){
    console.log(props.currentWorkspace)

    return (
        <>
            <WorkspaceTitle workspace={props.currentWorkspace.name}/>
        <section className="bg-red-100 h-screen grid lg:grid-cols-12 px-10 md:grid-cols-6">
           <Table />
           {/* <div className="bg-red-800  col-span-2 mx-2 h-fit">
            Hello world
           </div>
           <div className="bg-red-800  col-span-2 h-fit mx-2">
            Hello world
           </div>
           <div className="bg-red-800  col-span-2 h-fit mx-2">
            Hello world
           </div> */}
           
        </section>
        </>
    )
}