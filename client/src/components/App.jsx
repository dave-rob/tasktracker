import React, { useEffect, useState } from "react";
import Header from './Header'
import Login from './Login'
import LandingPage from "./Landingpage";
import UserPage from "./UserPage";
const App = () => {
  // const [tasks, setTasks] = useState([]);
  
  const [width, setWidth] = useState(window.innerWidth)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  

  useEffect(()=>{
    window.addEventListener("resize", ()=> setWidth(window.innerWidth))
  })

  
  function userLogin(response){ 
    setUserId(response)
    setUserLoggedIn(true);
  }
  return (
    <main>
    {userLoggedIn ? <UserPage authenticated={userLoggedIn} userId={userId} /> : <LandingPage userLogin={userLogin} width={width}/>}
    {/* {logIn ? <Header /> :<Login login={userLogin}/>  } */}
    {/* <p className="text-6xl font-bold underline">
      Hello world!
    </p> */}
     {/* {tasks.map((task) => (
        <h1 className="task" key={task.id}>
          {task.f_name}
        </h1>
      ))} */}
      
    </main>
  );
  
};

export default App;
