"use client"
import Link from 'next/link';
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    console.log(username)
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="p-3 rounded-md bg-slate-600">
        <h2 className="py-4 text-3xl font-medium text-white text-center">
          Signup Page
        </h2>
        <form action="" className="w-[400px] flex flex-col gap-5">
          <div className="p-2 w-full bg-slate-500">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none text-white"
              placeholder="Enter Email"
            />
          </div>
          <div className="p-2 w-full bg-slate-500">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent outline-none text-white"
              placeholder="Enter Username"
            />
          </div>
          <div className="p-2 w-full bg-slate-500">
            <input
              type="password"
              onChange={(e) => setPassword1(e.target.value)}
              className="bg-transparent outline-none text-white"
              placeholder="Enter Password"
            />
          </div>
          <div className="p-2 w-full bg-slate-500">
            <input
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              className="bg-transparent outline-none text-white"
              placeholder="Confirm Password"
            />
          </div>
          <span className='text-slate-200'>
            Already have an account login <Link className='text-slate-400' href={"login"}>!here</Link>
          </span>
          <button
            type="submit"
            title="submit button"
            className="font-medium rounded-md hover:bg-slate-700 text-white bg-slate-800 ease-in-out duration-200 transition-all py-3"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp