import { useState , useEffect, useRef} from "react";
import Modal from 'react-modal';
import axios from 'axios';
// components
import Header from "../components/Header";
// images
import edit from "../assets/images/edit.svg";
import delet from "../assets/images/delete.svg";


export default function Categories() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [EditmodalIsOpen, setEditIsOpen] = useState(false);
    const [ categories, setCategories ] = useState([])
    const [ lang , seTlang ] = useState([]);
    const [ editId , setEditId ] = useState()


   // get products
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/categorie/get-categories' , {
            withCredentials: true
        })
        .then(response => {
            setCategories(response.data.categories); 
            })
        .catch(error => {
            setError(error);
        });
    },[""]);


    // data value with useRef
    const nameUz = useRef()
    const nameRu = useRef()
    const nameEn = useRef()
    
    
    // post products
    const addCategory = async () => {        

        const data = new FormData();
        data.append('name_uz', nameUz.current.value );
        data.append('name_ru', nameRu.current.value );
        data.append('name_en', nameEn.current.value );

        try {
            await  axios.post(`https://5jiek.uz/api/v1/categorie/create-categorie`, data, {
                headers : {
                    "Content-Type": "application/json",
                },
                withCredentials: true 
            })
        } catch (error) {
         setError(error)
        }
    console.log('add category');
    closeModal()
    }

    const updateCategory = async (id) => {        
    
        const data = new FormData();
        data.append('name_uz', nameUz.current.value );
        data.append('name_ru', nameRu.current.value );
        data.append('name_en', nameEn.current.value );

        try {
            await  axios.put(`https://5jiek.uz/api/v1/categorie/update-categorie/${id}`, data, {
                headers : {
                    "Content-Type": "application/json",
                },
                withCredentials: true 
            })
        } catch (error) {
         setError(error)
        }
    console.log('update category');
    }

    // DELETE
    const deleteCategory = async (id) => {
        console.log(id);
        
        try {
            await axios.delete(`https://5jiek.uz/api/v1/categorie/delete-categorie/${id}`,{
                withCredentials : true
            });
            setCategories(categories.filter(category => category.id !== id));
        } catch (err) {
            setError(err.message);
        }
        console.log('DELETE')

    } 

       // changeLang
       const chaneLanguage = useRef();

        const changeLang = (evt) => {
           seTlang(evt)
   
           if(evt == "uz") {
               nameRu.current.style.display = "none";
               nameEn.current.style.display = "none";
               nameUz.current.style.display = "block";
           }
            if(evt == "en") {
               nameRu.current.style.display = "none";
               nameUz.current.style.display = "none";
               nameEn.current.style.display = "block";
           } 
           if(evt == "ru") {
               nameEn.current.style.display = "none";
               nameUz.current.style.display = "none";
               nameRu.current.style.display = "block";

           }
       }

    // modal post
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    // madal edit
    const EditopenModal = () => {
        setEditIsOpen(true)
    }
    const EditcloseModal = () => {
        setEditIsOpen(false)
    }

    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-56">
            <div className="container">
                <Header/>
                <div className="border-2 mt-10 p-5 rounded-lg border-sky-800">
                    <div className="flex justify-between mt-5">
                        <h3 className="text-white font-bold text-[25px] tracking-[2px]">Categories</h3>
                       <div className="flex">
                            <div className="mr-4 ">
                                <img src="" alt="" />
                                <input className="text-white rounded-lg bg-transparent border-2 border-solid border-sky-900 p-2" type="text" placeholder="search..." />
                            </div>
                            <button onClick={openModal} className="bg-sky-900 text-white p-2 font-mono  rounded-lg">Create product</button>
                       </div>
                       {/* modal post */}
                       <Modal
                                isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="w-64">
                                    <div className="flex ">
                                    <h1 className="font-bold mb-2 text-[18px] ">Create category</h1> 
                                    <select defaultValue={lang} ref={chaneLanguage} onChange={(evt) => changeLang(evt.target.value)} className="border-lg border-2 border-black rounded-lg h-10 absolute bottom-55 left-44  ">
                                        <option value="uz">uz</option>
                                        <option value="ru">ru</option>
                                        <option value="en">en</option>
                                    </select>
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-[100px] mb-4 " onClick={() => closeModal()} >X</button>
                                    </div>
                                    <div className="">
                                        <label>Category name ({lang}) </label>
                                        <input required ref={nameUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder="name uz"/> <br />
                                        <input required ref={nameRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name ru" /> <br />
                                        <input required  ref={nameEn} className=" w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name en" />
                                    </div>
                                    <button onClick={addCategory} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Add category</button>
                                </div>
                            </Modal>
                       {/* modal update*/}

                        {/* modal update */}
                       <Modal
                                isOpen={EditmodalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="w-64">
                                    <div className="flex ">
                                    <h1 className="font-bold mb-2 text-[18px] ">Edit category</h1> 
                                    <select defaultValue={lang} ref={chaneLanguage} onChange={(evt) => changeLang(evt.target.value)} className="border-lg border-2 border-black rounded-lg h-10 absolute bottom-55 left-44  ">
                                        <option value="uz">uz</option>
                                        <option value="ru">ru</option>
                                        <option value="en">en</option>
                                    </select>
                                    <button className="border-solid border-black border-2 px-1 rounded-lg ml-[100px] mb-4 " onClick={() => EditcloseModal()} >X</button>
                                    </div>
                                    <div className="">
                                        <label>Category name ({lang}) </label>
                                        <input required ref={nameUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder="name uz"/> <br />
                                        <input required ref={nameRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name ru" /> <br />
                                        <input required  ref={nameEn} className=" w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name en" />
                                    </div>
                                    <button onClick={updateCategory(`${editId}`)} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Edit category</button>
                                </div>
                        </Modal>
                        {/* modal update */}
                    </div>
                    <table className="mt-10 w-[1200px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Name</td>
                                <td className="text-white font-bold relative right-16">Name slug</td>
                                <td className="text-white font-bold relative left-8">Modify</td>
                            </tr>
                        </thead>
                        <tbody className="w-[1200px] h-[200px]">
                            {
                                categories?.map(item => {
                                    return(
                                        <tr>
                                            <td className="text-white text-[20px]  mb-5">{item.name_uz}</td>
                                            <td className="text-white text-[20px]  relative right-16"><p>{item.name_slug_uz}</p></td>
                                            <td className="text-white relative left-8 ">
                                                <button onClick={() => {
                                                    EditopenModal()
                                                    setEditId(`${item.id}`)
                                                } }><img className="mr-5" src={edit} width={20} alt="" /></button>
                                                <button onClick={() => deleteCategory(`${item.id}`)}><img className="" src={delet} width={25} alt="" /></button>  
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
