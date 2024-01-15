"use client";
import {useState} from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '../firebase/config'
import React from "react";
import { useRouter } from "next/navigation";
import {Axios} from "axios";

export default function LoginPage() {

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const[signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()

    const onLogin =async () => {
      try {
        const res = await signInWithEmailAndPassword(email,password)
        console.log({res})
        setEmail('')
        setPassword('');
        router.push('/')
      }catch(e){
        console.error(e)
      }
    }

    return (
      <main className='flex w-full h-full min-h-screen bg-[#f9f8f5] items-center justify-center'>

        <div className='flex flex-col space-y-1 text-black text-normal font-sans p-6 justify-start border-blue-500 border-[1px] rounded-lg'>
        
            <h1 className="text-xl ml-[35%]">Login</h1>
            <hr/>
            
            <label htmlFor="email">email</label>
            <input className="rounded-lg border-none p-1 focus:outline-none" 
              type="email"
              id = "email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              />

            <label htmlFor="password">Password</label>
            <input className="rounded-lg border-none p-1 focus:outline-none" 
              type="password"
              id = "password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              />

            <button
               className="p-1 w-[45%] ml-[25%] mt-3 border-black border-[0.5px] rounded-lg hover hover:bg-black hover:text-white"
               onClick={onLogin}
               >Login</button>

            <a href="/signup" className=" ml-[18%] text-blue-500 hover hover:underline">New user? click here</a>
      
        </div>
      </main>      
    )
  }



