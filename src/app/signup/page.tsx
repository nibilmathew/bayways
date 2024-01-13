"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {Axios} from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: ""
    })

    const onSignup =async () => {
      
    }

    return (
      <main className='flex w-full h-full min-h-screen bg-[#f9f8f5] items-center justify-center'>

        <div className='flex flex-col space-y-1 text-black text-normal font-sans p-6 justify-start border-blue-500 border-[1px] rounded-lg'>
        
            <h1 className="text-xl ml-[35%]">SignUp</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input className="rounded-lg border-none p-1 focus:outline-none" 
              type="text"
              id = "username"
              value={user.username}
              onChange={(e) => setUser({...user,username: e.target.value})}
              placeholder="username"
              />
            
            <label htmlFor="email">email</label>
            <input className="rounded-lg border-none p-1 focus:outline-none" 
              type="text"
              id = "email"
              value={user.email}
              onChange={(e) => setUser({...user,email: e.target.value})}
              placeholder="email"
              />

            <label htmlFor="password">Password</label>
            <input className="rounded-lg border-none p-1 focus:outline-none" 
              type="password"
              id = "password"
              value={user.password}
              onChange={(e) => setUser({...user,password: e.target.value})}
              placeholder="password"
              />

            <button
               className="p-1 w-[45%] ml-[25%] mt-3 border-black border-[0.5px] rounded-lg hover hover:bg-black hover:text-white"
               onClick={onSignup}
               >Signup</button>

            <a href="/login" className="ml-[18%] text-blue-500 hover hover:underline">New user? click here</a>
      
        </div>
      </main>      
    )
  }



