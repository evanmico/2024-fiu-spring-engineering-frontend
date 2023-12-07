import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    accountTypeID: 1
  });

  const navigate = useNavigate();
  const handleChange = (e) =>{
    setAccount(prev=>({...prev, [e.target.name]: e.target.value}));
  };
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8805/accounts", account);
      navigate("/Account");
    } catch(err){
      console.log(err);
    }
  } 
  console.log(account);
  return (
    <section className='h-full container flex flex-col justify-center mx-auto space-y-10'>
          <h1 className='text-6xl'>Anna's Massages</h1>

          <div className="form flex flex-col py-4 items-stretch space-y-7 mx-auto text-2xl">
            <label className="flex flex-row place-content-between items-center space-x-2">
              <div>email:</div>
              <input className='p-2 rounded-md' type='text' onChange={handleChange} name='email'/>
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Password:</div>
              <input className='p-2 rounded-md' type="password" onChange={handleChange} name='password'/>
            </label>
          </div>

          <div className='flex flex-row space-x-4 text-2xl'>
            <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit">
              <div>
                Log in
              </div>
            </button>
            <button onClick={handleClick} className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit">
              <div>
                Register
              </div>
            </button>
          </div>
        </section>
  )
}

export default Add