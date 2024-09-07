import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import ConstructionProducts from "../database/data";


// images
import user from "../assets/images/account.svg";
import edit from "../assets/images/edit.svg";
import delet from "../assets/images/delete.svg";


export default function Contracts() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [ products, setProducts ] = useState([])


    fetch(`https://savdo5jiek.onrender.com/api/v1/product/get-products`, {
        method:"GET",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))




    // modal
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };



    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-60">
            <div className="container">
                <header className="flex justify-between border-b-2 border-sky-700 pb-[13px]">
                    <h1 className="text-white font-bold mt-4 ml-5 text-[20px] tracking-[2px]">Admin</h1>
                    <div className="flex text-white mt-5 mr-5">
                        <img className="mr-4" src={user} width={25} height={25} alt="" />
                        <Link to={'/admin'}><span className="font-bold">John Born</span></Link>
                    </div>
                </header>
               
                <div className="border-2 mt-10 p-5 rounded-lg border-sky-800">
                    <div className="flex justify-between mt-5">
                        <h3 className="text-white font-bold text-[25px] tracking-[2px]">Contracts</h3>
                       <div className="flex">
                            <div className="mr-4 ">
                                <img src="" alt="" />
                                <input className="text-white rounded-lg bg-transparent border-2 border-solid border-sky-900 p-2" type="text" placeholder="search..." />
                            </div>
                            <button onClick={openModal} className="bg-sky-900 text-white p-2 font-mono  rounded-lg">Create product</button>
                       </div>
                       {/* modal */}
                       <Modal
                                isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="w-64">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Create product</h1> 
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-[100px] mb-4 " onClick={() => closeModal()} >X</button>
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product name</label>
                                        <input className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product weight</label>
                                        <input className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product price</label>
                                        <input className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product discount</label>
                                        <input className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <button className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Add product</button>
                                </div>
                            </Modal>
                       {/* modal */}
                    </div>
                    <table className="mt-10 w-[1200px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Name</td>
                                <td className="text-white font-bold relative right-16">Weight</td>
                                <td className="text-white font-bold relative left-8">Price</td>
                                <td className="text-white font-bold relative left-8">Disocunt</td>
                                <td className="text-white font-bold relative left-8">Delete</td>
                            </tr>
                        </thead>
                        <tbody className="w-[1200px] h-[500px]">
                            {
                                ConstructionProducts?.map(item => {
                                    return(
                                        <tr>
                                            <td className="text-slate-300 mb-10 relative top-10">{item.name}</td>
                                            <td className="text-slate-300 relative right-16 mb-10 top-10"><p>{item.massa}</p></td>
                                            <td className="text-slate-300 relative left-8 mb-10 top-10">{item.price}</td>
                                            <td className="text-slate-300 relative left-8 mb-10 top-10">{item.discount}</td>
                                            <td className="text-slate-300 relative left-8 mb-10 top-10">
                                                {/* <button><img className="mr-5" src={edit} width={20} alt="" /></button> */}
                                                <button><img className="ml-5" src={delet} width={25} alt="" /></button>  
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
