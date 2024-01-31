import Header from "./Header";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register"

export default function LandingPage(props){
  const [logIn, setLogIn] = useState(false);
  const [registerScreen, setRegisterScreen] = useState(false);

  function userLogin(response){ 
    setLogIn(response);
  }

    function userRegisterScreen(response){
      setRegisterScreen(response)
    }

    console.log("register", registerScreen)
    const features = [
        { name: 'Add', description: 'Any plus sign will allow you to add a new workspace, table, or task' },
        { name: 'Double Click', description: 'Double click on a task and you can edit the task' },
        { name: 'Press Enter', description: 'When done with editing a task, click enter to save the new task' },
        { name: 'Right Click', description: 'Right clicking a task will mark the task as complete' },
        { name: 'Drag and Drop', description: 'You can easily move tasks between tables by dragging and dropping' },
        // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
      ]

      
    return (
        <>
        {registerScreen ? <Register register={userRegisterScreen}/> : (<>
            {logIn ? <Login login={props.userLogin}/> : <>
            <Header login={userLogin} register = {userRegisterScreen} />
            {props.width >=768?(<section className="bg-[url('/images/bigherobg.png')] bg-cover">
    <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 sm:grid-cols-12" >
        <div className="mr-auto place-self-center lg:col-span-7 sm:col-span-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-gray-800">TaskHive</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Buzzworthy Productivity, One Task at a Time.</p>
            <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-800 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a onClick={() =>setRegisterScreen(true)} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign up
            </a> 
        </div>
        </div>
</section>) : (<section className="bg-[url('/images/herobg.png')] bg-cover">
    <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 sm:grid-cols-12" >
        <div className="mr-auto place-self-center lg:col-span-7 sm:col-span-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-gray-800">TaskHive</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl ">Buzzworthy Productivity, One Task at a Time.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-800 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Sign up
            </a> 
        </div>
        </div>
</section>) }
        
        
               
    
 <section className="bg-white dark:bg-gray-900 ">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      
        <img className="w-full block" src='images/websitedemo.png' alt="dashboard image" />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Let us help you stay on top of your tasks.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            TaskHive helps you stay on top of your tasks and create multiple workspaces. When you have so many things to do for work, home, and to be able to enjoy you time off, let us help you accomplish these tasks and stay ahead of the game. 
            </p>
            
        </div>
    </div>
</section>
<div className="bg-white relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Features</h2>
          <p className="mt-4 text-gray-500">
            TaskHive allows one to create new workspaces, tables, and tasks with ease. We have multiple features that allows for fast and reliable ways to track your progress.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src='images/rightclick.png'
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="images/edit.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="images/dragndrop.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="images/multipleworkspaces.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
   </>}</>)}
        </>
    )
}