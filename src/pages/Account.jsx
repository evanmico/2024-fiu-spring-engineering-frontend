import React from 'react'
import axios from 'axios'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { useState } from 'react'
import { useEffect } from 'react'

const Account = () => {
    const [accounts, setAccounts] = useState([]);
   
    useEffect(()=>{
        const fetchAllAccounts = async ()=>{
            try {
                const res = await axios.get("http://localhost:8805/accounts");
                setAccounts(res.data);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllAccounts();
    }, [])
    const [accountDelete, setAccounttoDelete] = useState();
    const handleClick = e => {
        console.log(e);
        setAccounttoDelete(e);
        document.getElementById(e).classList.replace('active:grayscale', 'grayscale');
        document.getElementById('DEL').classList.remove('hidden');
    }
    const handleClickF = () => {
        console.log(accountDelete);
        document.getElementById(accountDelete).classList.replace('grayscale', 'active:grayscale');
    }
    return (
        <div>
            <h1 className='text-6xl font-bold py-3'>Accounts</h1>
            <div className="accounts grid p-4 grid-cols-3 gap-4">
                {accounts.map(account=>(
                    <button id={account.ID} type='button' onClick={() => handleClick(account.ID)} className="account transition hover:grayscale duration-300 active:grayscale p-2 shadow-lg border-lapis border-4 rounded-lg bg-moon text-eerieBlack" key={account.ID}>
                        <h2 className="text-3xl font-bold">{account.ID}</h2>
                        <p className="text-xl text-center">{account.email}</p>
                        <p className="text-xl text-center">{account.password}</p>
                        <p className="text-xl text-center font-bold">{account.accountTypeValue}</p>
                    </button>
                ))}
            </div>
            <button className="m-3 p-4 border-4 rounded-lg border-lapis bg-light text-eerieBlack shadow-xl font-bold text-2xl hover:bg-eerieBlack hover:text-light"><Link to="/Add">Add new account</Link></button>
            <button id='DEL' type='button' onClick={handleClickF} className="hidden m-3 p-4 border-4 rounded-lg border-lapis bg-light text-eerieBlack shadow-xl font-bold text-2xl hover:bg-eerieBlack hover:text-light">Delete Account</button>
        </div>
    )
}

export default Account