import { useState } from "react";
import useAuth from "../hook/useAuth";


export default function Login() {


    const [ user, setUser ] = useAuth();
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ twoFactorSector, setTwoFactorSector ] = useState("")


    const handleClick = () => {
        // console.log(email, password, twoFactorSector);   

        fetch(`https://5jiek.uz/api/v1/adminstrator/adminstrator-login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body: JSON.stringify({
                email,
                password,
                twoFactorSector
            })
        })
        .then(res => res.json())
        .then(data => setUser(data.user))
    }


    return(
        <>
            <div className="border-2 border-solid border-black w-96 mt-28 mx-auto mb-60 rounded-lg p-5 bg-slate-800 text-white" >
                <h1 className="text-center font-bold text-[25px] tracking-[2px] mb-4">Login Here</h1>
                    <div className="flex flex-col mb-5">
                        <label className="text-[20px] mb-2 tracking-[2px]" >Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="p-2 bg-transparent border-2 border-solid rounded-lg" type="text" placeholder="Email" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="text-[20px] mb-2 tracking-[2px]">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="p-2 bg-transparent border-2 border-solid rounded-lg" type="text" placeholder="Password" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[20px] mb-2 tracking-[2px]">Two Factor</label>
                        <input onChange={(e) => setTwoFactorSector(e.target.value)} className="p-2 bg-transparent border-2 border-solid rounded-lg" type="text" placeholder="two factor" />
                    </div>
                    <button onClick={() => handleClick()} type="submit" className="p-2 border-2 border-solid w-[100%] rounded-lg mt-10" >Log In</button>
            </div>            
        </>
    )
}