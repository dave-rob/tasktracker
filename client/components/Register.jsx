import { useState, useEffect } from "react";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/24/outline";
export default function Login(props) {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userfname, setUserFname] = useState("");
    const [userlname, setUserLname] = useState("");

  const recordEmail = (event) => {
    setUserEmail(event.target.value);
  }
  const recordPassword= (event) => {
    setUserPassword(event.target.value);
  }

  const recordFname = (event) => {
    setUserFname(event.target.value);
  }
  const recordLname= (event) => {
    setUserLname(event.target.value);
  }

    function onRegister(event){
        event.preventDefault()
        axios.post("/api/register", {
                fname: userfname,
                lname: userlname,
                email: userEmail,
                password: userPassword
            })
              .then((res) => {
                props.register(false)
              })
              .catch((res) => alert("email is already being used"));
    }
            
    return (
      <>
      <XCircleIcon  onClick = {()=>props.register(false)} className="m-5 h-6 float-right dark:text-white text-black hover:text-yellow-400"/>
        <div className=" px-6 py-12 lg:px-8">
        <div className="dark:border-gray-500 w-fit px-20 py-10 m-auto rounded-xl shadow-lg border-2 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <img
              className=" h-10 w-auto float-left"
              src="./assets/logo.png"
              alt="TaskHive"
            />
            <h1 className=" text-3xl ">TaskHive</h1>
          </div>
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              Create an account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST">
              <div>
              <div className=" grid md:grid-cols-2 sm:grid-cols-1">
              <div className="md:mr-1 mb-2 py-1.5">
              <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
              First Name
              </label>
              <input
                    id="fname"
                    name="fname"
                   onChange={recordFname}
                    //autoComplete="email"
                    required
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  /></div><div className="md:ml-1 mb-2 py-1.5">
              <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
              Last Name
              </label>
              <input
                    id="lname"
                    name="lname"
                   onChange={recordLname}
                    //autoComplete="email"
                    required
                    className="inline rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  /></div></div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={recordEmail}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-gray-100">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={recordPassword}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                onClick={onRegister}
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  Register
                </button>
              </div>
            </form>
  
          </div>
          </div>
        </div>
      </>
    )
  }