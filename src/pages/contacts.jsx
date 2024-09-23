import { useState , useEffect} from "react";
import axios from "axios";
// components
import Header from "../components/Header";
// images
import delet from "../assets/images/delete.svg";


export default function Contacts() {

    const [ contacts, setContacts ] = useState([])

    // get contacts
     useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/contacts/get-contact-list-by-admin' , {
            withCredentials: true
        })
        .then(response => {
            setContacts(response.data.contactUs); 
            })
        .catch(error => {
            setError(error);
        });
    },[""]);    

    // DELETE
     const deleteContact = async (id) => {
        
        try {
            await axios.delete(`https://5jiek.uz/api/v1/contacts/delete-contact-by-admin/${id}`,{
                withCredentials : true
            });
            setContacts(contacts.filter(contact => contact.id !== id));
        } catch (err) {
            setError(err.message);
        }
        console.log('DELETE')
    } 

    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-56">
            <div className="container">
                <Header/>
                <div className="border-2 mt-10 p-5 rounded-lg border-sky-800 min-h-[500px]">
                    <div className="flex justify-between mt-5">
                        <h3 className="text-white font-bold text-[25px] tracking-[2px]">Contacts</h3>
                    </div>
                    <table className="mt-10 w-[1200px] min-h-[300px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Name</td>
                                <td className="text-white font-bold relative left-4">Email</td>
                                <td className="text-white font-bold relative right-20">Message</td>
                                <td className="text-white font-bold relative left-8">Phone</td>
                                <td className="text-white font-bold relative left-8">Modify</td>
                            </tr>
                        </thead>
                        <tbody className="w-[1200px] min-h-[250px]">
                            {
                                contacts?.map(item => {
                                    return(
                                        <tr className="">
                                            <td className="text-slate-300 mb-20 relative top-10">{item.name}</td>
                                            <td className="text-slate-300 relative left-4 mb-10 top-10"><p>{item.email}</p></td>
                                            <td className="text-slate-300 relative right-20 mb-10 top-10 w-72 ">{item.message}</td>
                                            <td className="text-slate-300 relative left-8 mb-10 top-10">{item.phone}</td>
                                            <td className="text-slate-300 relative left-8 mb-10 top-10">
                                                <button onClick={() => deleteContact(`${item.id}`)}><img className="ml-5" src={delet} width={25} alt="" /></button>  
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
