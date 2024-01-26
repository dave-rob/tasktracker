import React, { useEffect, useState } from "react";
import Header from './Header'
import Login from './Login'
import LandingPage from "./Landingpage";
import UserPage from "./UserPage";
const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const [width, setWidth] = useState(window.innerWidth)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(()=>{
    window.addEventListener("resize", ()=> setWidth(window.innerWidth))
  })

  console.log(width)

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
        console.log(tasks);
      });
  }, []);

  function userLogin(response){ 
    setUserLoggedIn(true);
  }
  return (
    <main>
    {userLoggedIn ? <UserPage /> : <LandingPage userLogin={userLogin} width={width}/>}
    {/* {logIn ? <Header /> :<Login login={userLogin}/>  } */}
    {/* <p className="text-6xl font-bold underline">
      Hello world!
    </p> */}
     {tasks.map((task) => (
        <h1 className="task" key={task.id}>
          {task.f_name}
        </h1>
      ))}
      
    </main>
  );
  
};

export default App;
