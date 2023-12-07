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
    const [clients, setAccounts] = useState([]);
   
    useEffect(()=>{
        const fetchAllAccounts = async ()=>{
            try {
                const res = await axios.get("http://localhost:8805/clients/all");
                setAccounts(res.data);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllAccounts();
    }, [])

    return (
        <div className="justify-center md:space-y-7">
            <h1 className='text-7xl md:text-8xl font-bold flex justify-center'>Clients</h1>
            <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:max-grid-cols-3 w-full gap-4 justify-evenly">
                {clients.map(client=>(
                    <div className="account p-2 px-4 shadow-2xl space-y-1 border-lapis border-4 rounded-lg bg-moon text-eerieBlack" key={client.ID}>
                        <h2 className="text-3xl md:text-5xl text-center pb-2 font-bold border-b-4">{client.fullName}</h2>
                        <p className="text-xl md:text-2xl text-center">{client.phoneNumber}</p>
                        <p className="text-xl md:text-2xl text-center">{client.dob}</p>
                        <p className="text-xl md:text-2xl text-center">{client.email}</p>
                        <p className="text-xl md:text-2xl text-center">{client.occupation}</p>
                        <p className="text-xl md:text-2xl text-center">{client.employer}</p>
                        <p className="text-xl md:text-2xl text-center font-bold">{client.sex}</p>
                    </div>
                ))}
            </div>
            <button className="p-4 border-4 rounded-lg border-lapis bg-light text-eerieBlack shadow-xl font-bold text-4xl md:text-5xl hover:bg-eerieBlack hover:text-light"><Link to="/Add">Add New Client</Link></button>
        </div>
    )
}

export default Account