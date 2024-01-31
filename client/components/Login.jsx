import { useState, useEffect } from "react";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/24/outline";
export default function Login(props) {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

  const recordEmail = (event) => {
    setUserEmail(event.target.value);
  }
  const recordPassword= (event) => {
    setUserPassword(event.target.value);
  }

    function onLogin(event){
        event.preventDefault()
        axios.post("/api/login", {
                email: userEmail,
                password: userPassword
            })
              .then((res) => {
                props.login(res.data.id)
              })
              .catch((res) => alert("incorrect username/password"));
        // props.login(true)
    }
            
    return (
      <>
      <XCircleIcon  onClick = {()=>props.cancelLogin(false)} className="m-5 h-6 float-right dark:text-white text-black hover:text-yellow-400"/>
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
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST">
              <div>
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
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-yellow-400 hover:text-yellow-500">
                      Forgot password?
                    </a>
                  </div>
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
                  onClick={onLogin}
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-100">
              Not a member?{' '}
              <a onClick ={()=>props.register(true)}className="font-semibold leading-6 text-yellow-400 hover:text-yellow-500">
                Register today
              </a>
            </p>
          </div>
          </div>
        </div>
      </>
    )
  }
  