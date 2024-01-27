import Task from "./Task"

const Table = (props) =>{
    return (
        <>
            <div className="bg-red-800  col-span-2  mx-2 h-fit mt-5 pb-2">
           <h3 className="text-xl text-center py-2">tasks</h3>
            <Task />
            <Task />
           </div>
        </>
    )
}

export default Table;