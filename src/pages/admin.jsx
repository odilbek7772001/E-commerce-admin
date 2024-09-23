import { useState , useEffect, useRef} from "react";
import axios from "axios";
import Modal from 'react-modal';
// components
import Header from "../components/Header";

// images
import edit from "../assets/images/edit.svg";
import delet from "../assets/images/delete.svg";


export default function Admin() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [ admin, setAdmin ] = useState([])

    // get admin
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/adminstrator/get-me-adminstrator' , {
            withCredentials: true
        })
        .then(response => {
            setAdmin(response.data.data.AdminInfo); 
            })
        .catch(error => {
            setError(error);
        });
    },[""]);    


    // post admin

    const companyName = useRef()
    const firstName = useRef()
    const middleName = useRef()
    const surName = useRef()
    const adres = useRef()
    const phone = useRef()
    const inn = useRef()
    const oked = useRef()
    const xr = useRef()
    const bank = useRef()
    const mfo = useRef()


    // add admin 
    const addAdmin = async () => {

        const data = new FormData();
        data.append('company_name', companyName.current.value );
        data.append('first_name', firstName.current.value );
        data.append('middle_name', middleName.current.value );
        data.append('sur_name', surName.current.value );
        data.append('address', adres.current.value );
        data.append('tel', phone.current.value );
        data.append('inn', inn.current.value);
        data.append('oked', oked.current.value );
        data.append('x_r', xr.current.value );
        data.append('bank', bank.current.value );
        data.append('mfo', mfo.current.value );

        try {
            await axios.post(`https://5jiek.uz/api/v1/adminstrator/adminstrator-add-update-info`, data, {
                headers : {
                    "Content-Type": "application/json",
                },
                withCredentials: true 
            })
        } catch (error) {
         console.log(error) 
        }
        closeModal()
    console.log('add admin info');

    companyName.current.value = null;
    firstName.current.value = null;
    firstName.current.value = null;
    middleName.current.value = null;
    surName.current.value  = null;
    adres.current.value = null;
    phone.current.value = null;
    inn.current.value  = null;
    oked.current.value = null;
    xr.current.value = null;
    bank.current.value = null

    }

    // edit admin
    const editAdmin = async () => {

        const data = new FormData();
        data.append('company_name', companyName.current.value );
        data.append('first_name', firstName.current.value );
        data.append('middle_name', middleName.current.value );
        data.append('sur_name', surName.current.value );
        data.append('address', adres.current.value );
        data.append('tel', phone.current.value );
        data.append('inn', inn.current.value);
        data.append('oked', oked.current.value );
        data.append('x_r', xr.current.value );
        data.append('bank', bank.current.value );
        data.append('mfo', mfo.current.value );

        try {
            await axios.post(`https://5jiek.uz/api/v1/adminstrator/adminstrator-add-update-info`, data, {
                headers : {
                    "Content-Type": "application/json",
                },
                withCredentials: true 
            })
        } catch (error) {
         console.log(error) 
        }
        editModalClose()
        console.log('edit admin');
    }

    // modal post
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    // edit modal
    const editModalOpen = () => {
        setModalOpen(true);
    }

    // edit modal
    const editModalClose = () => {
        setModalOpen(false);
    }

    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-60">
            <div className="container">
                <Header/>
                <div className="border-2 mt-10 p-5 rounded-lg border-sky-800 min-h-80">
                    <div className="flex justify-between mt-5">
                        <h3 className="text-white font-bold text-[25px] tracking-[2px]">Admin info</h3>
                       <div className="flex">
                            <button onClick={openModal} className="bg-sky-900 text-white p-2 font-mono  rounded-lg">Create admin info</button>
                       </div>
                       {/* modal post*/}
                       <Modal
                                isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Create admin info</h1> 
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-[350px] mb-4 " onClick={() => closeModal()} >X</button>
                                </div>
                                    <div className="admin__wrapper flex">
                                        <div className="admin__left mr-5">
                                            <div className="">
                                                <label htmlFor="name">Company name</label>
                                                <input ref={companyName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">First name</label>
                                                <input ref={firstName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Middle name</label>
                                                <input ref={middleName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Surname</label>
                                                <input ref={surName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Address</label>
                                                <textarea ref={adres} className="w-64 h-28 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text"></textarea>
                                            </div>
                                        </div>
                                        <div className="admin__right">
                                            <div className="">
                                                <label htmlFor="name">Tel</label>
                                                <input ref={phone} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Inn</label>
                                                <input ref={inn} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Oked</label>
                                                <input ref={oked} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">X_R</label>
                                                <input ref={xr} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Bank</label>
                                                <input ref={bank} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Mfo</label>
                                                <input ref={mfo} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={addAdmin} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Add admin info</button>
                                </div>
                            </Modal>
                       {/* modal post */}

                        {/* modal update */}
                        <Modal
                                isOpen={modalOpen} onRequestClose={editModalClose} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Edit admin info</h1> 
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-[350px] mb-4 " onClick={() => editModalClose()} >X</button>
                                </div>
                                    <div className="admin__wrapper flex">
                                        <div className="admin__left mr-5">
                                            <div className="">
                                                <label htmlFor="name">Company name</label>
                                                <input ref={companyName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">First name</label>
                                                <input ref={firstName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Middle name</label>
                                                <input ref={middleName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Surname</label>
                                                <input ref={surName} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Address</label>
                                                <textarea ref={adres} className="w-64 h-28 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text"></textarea>
                                            </div>
                                        </div>
                                        <div className="admin__right">
                                            <div className="">
                                                <label htmlFor="name">Tel</label>
                                                <input ref={phone} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Inn</label>
                                                <input ref={inn} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Oked</label>
                                                <input ref={oked} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">X_R</label>
                                                <input ref={xr} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Bank</label>
                                                <input ref={bank} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                            <div className="">
                                                <label htmlFor="name">Mfo</label>
                                                <input ref={mfo} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={editAdmin} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Edit admin info</button>
                                </div>
                            </Modal>
                       {/* modal update */}
                    </div>
                    <table className="mt-10 w-[1200px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Name</td>
                                <td className="text-white font-bold relative ">Surname</td>
                                <td className="text-white font-bold ">Phone</td>
                                <td className="text-white font-bold relative right-10">Address</td>
                                <td className="text-white font-bold relative left-8">Company</td>
                                <td className="text-white font-bold relative left-8">Bank</td>
                                <td className="text-white font-bold relative left-8">Modify</td>
                            </tr>
                        </thead>
                        <tbody className="w-[1200px] ">
                            {
                                
                                <tr>
                                    <td className="text-slate-300 mb-10 relative top-10">{admin.first_name}</td>
                                    <td className="text-slate-300 relative mt-10 top-10"><p>{admin.middle_name}</p></td>
                                    <td className="text-slate-300 relative mb-10 top-10">{admin.tel}</td>
                                    <td className="text-slate-300 relative right-10 mb-10 top-10 w-44">{admin.address}</td>
                                    <td className="text-slate-300 relative left-8 mb-10 top-10">{admin.company_name}</td>
                                    <td className="text-slate-300 relative left-8 mb-10 top-10">{admin.bank}</td>
                                    <td className="text-slate-300 relative left-8 mb-10 top-10">
                                        <button onClick={() => editModalOpen()}><img className="ml-5" src={edit} width={20} alt="" /></button>
                                    </td>
                                </tr>                               
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
