import React, { useEffect, useState } from "react";
import Header from './Header'
import Login from './Login'
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [logIn, setLogIn] = useState(false);
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  function userLogin(response){
    setLogIn(true);
  }
  return (
    <main>
    {logIn ? <Header /> :<Login login={userLogin}/>  }
    {/* <p className="text-6xl font-bold underline">
      Hello world!
    </p> */}
      {/* {tasks.map((task) => (
        <span className="task" key={task.id}>
          {task.description}
        </span>
      ))} */}
      
    </main>
  );
  
};

export default App;
