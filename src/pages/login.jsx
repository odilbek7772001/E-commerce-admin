import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useToken from "../context/useToken";

export default function Login() {

    const [ token, setToken ] = useToken
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")


    const handleClick = () => {
        console.log(username, password);   

        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return(
        <>
            <div className="border-2 border-solid border-black w-96 mt-28 mx-auto mb-60 rounded-lg p-5 bg-slate-800 text-white" >
                <h1 className="text-center font-bold text-[25px] tracking-[2px] mb-4">Login Here</h1>
                 <form >
                    <div className="flex flex-col mb-10">
                        <label className="text-[20px] mb-2 tracking-[2px]" >Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} className="p-2 bg-transparent border-2 border-solid rounded-lg" type="text" placeholder="Email or phone" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[20px] mb-2 tracking-[2px]">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="p-2 bg-transparent border-2 border-solid rounded-lg" type="password" placeholder="Password" />
                    </div>
                    <Link to={'/home'}><button onClick={() => handleClick()} type="submit" className="p-2 border-2 border-solid w-[100%] rounded-lg mt-10" >Log In</button></Link>
                 </form>
            </div>            
        </>
    )
}