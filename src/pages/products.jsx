import { useState , useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Modal from 'react-modal';
// component
import Analytics from "../components/Analytics";

// images
import user from "../assets/images/account.svg";
import edit from "../assets/images/edit.svg";
import delet from "../assets/images/delete.svg";


export default function Products() {      

    // hooks
    const [modalIsOpen, setIsOpen] = useState(false);
    const [EditmodalIsOpen, setEditIsOpen] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([])
    const [error, setError] = useState(null);
    const [ lang , seTlang ] = useState([]);
    const [ productId , setProductId] = useState([])



      // get products
        useEffect(() => {
            axios.get('https://5jiek.uz/api/v1/product/get-products' , {
                withCredentials: true
            })
            .then(response => {
                setProducts(response.data.data); 
                })
            .catch(error => {
                setError(error);
            });
        },[""]);


    // get categories

        useEffect(() => {
            axios.get('https://5jiek.uz/api/v1/categorie/get-categories', {
                withCredentials: true
            })
          .then(response => {
              setCategories(response.data.categories); 
            })
            .catch(error => {
            setError(error);
            });
        
            const selectCategory = document.getElementById('select')
    
            categories.forEach(i => {            
                const option = document.createElement('option');
                option.setAttribute('value', i.id)
                option.textContent = i.name_uz;
                selectCategory.append(option);
            })
        },[]);
    

// ------------------------------------------------------------------------------------------------

    // data value with useRef
    const nameUz = useRef()
    const nameRu = useRef()
    const nameEn = useRef()
    const descriptionUz = useRef()
    const descriptionRu = useRef()
    const descriptionEn = useRef()
    const price = useRef()
    const discount = useRef()
    const categoryId = useRef()
    const unit = useRef()
    const deleveryPrice = useRef()
    const stock = useRef()

    // POST

        const [ file , setFile ] = useState([]);   

         const handleFileChange = (e) => {
            const newFile = e.target.files[0]
            if(!newFile) return 
            setFile([...file , newFile ]);
        }        

    const addData = async () => {

        if(file.length < 1 ) {
            alert("Product yuklashda rasimlar eng kamida 1ta bo'lishi kerak.")
        } 

        if(file.length > 3) {
            alert("Product yuklashda rasimlar eng ko'pida 3ta bo'lishi kerak.")
        }

        const data = new FormData();
        data.append('name_uz', nameUz.current.value );
        data.append('name_ru', nameRu.current.value );
        data.append('name_en', nameEn.current.value );
        data.append('description_uz', descriptionUz.current.value );
        data.append('description_ru', descriptionRu.current.value );
        data.append('description_en', descriptionEn.current.value );
        data.append('price', Number(price.current.value));
        data.append('discount', Number(discount.current.value ));
        data.append('categoryId', categoryId.current.value );
        data.append('unit_uz', unit.current.value );
        data.append('delivery_price', Number(deleveryPrice.current.value) );
        data.append('stock', Number(stock.current.value));
        file.forEach(item => {
            data.append('images', item);
         })
            try {
                await  axios.post(`https://5jiek.uz/api/v1/product/create-product-by-admin`, data, {
                    headers : {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true 
                })
            } catch (error) {
             setError(error)
            }
        console.log('add data');
        closeModal()
    }

    
 // UPDATE PRODUCT
 const UpdateData = async (id) => {

    if(file.length < 1 ) {
        alert("Product yuklashda rasimlar eng kamida 1ta bo'lishi kerak.")
    } 

    if(file.length > 3) {
        alert("Product yuklashda rasimlar eng ko'pida 3ta bo'lishi kerak.")
    }

    const data = new FormData();

    data.append('name_uz', nameUz.current.value );
    data.append('name_ru', nameRu.current.value );
    data.append('name_en', nameEn.current.value );
    data.append('description_uz', descriptionUz.current.value );
    data.append('description_ru', descriptionRu.current.value );
    data.append('description_en', descriptionEn.current.value );
    data.append('price', Number(price.current.value));
    data.append('discount', Number(discount.current.value ));
    data.append('categoryId', categoryId.current.value );
    data.append('unit_uz', unit.current.value );
    data.append('delivery_price', Number(deleveryPrice.current.value) );
    data.append('stock', Number(stock.current.value));

    file.forEach(item => {
        data.append('images', item);
     })

        try {
            await  axios.put(`https://5jiek.uz/api/v1/product/update-product-by-admin/${id}`, data, {
                headers : {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true 
            })
        } catch (error) {
         console.log(error);
         setError(error)
        }
    console.log('Update data');
}


    // DELETE
    const deleteData = async (id) => {
            try {
                await axios.delete(`https://5jiek.uz/api/v1/product/delete-product-by-admin/${id}`,{
                    withCredentials : true
                });
                setProducts(products.filter(product => product.id !== id));
            } catch (err) {
                setError(err.message);
            }
        console.log('DELETE')
    } 



    // madal edit
    const EditopenModal = () => {
        setEditIsOpen(true)
    }
    const EditcloseModal = () => {
        setEditIsOpen(false)
    }

    // modal post
    const openModal = () => {
        setIsOpen(true);
    };

    let closeModal = () => {
        setIsOpen(false);
    };

    // changeLang
    const chaneLanguage = useRef();

    const changeLang = (evt) => {
        seTlang(evt)

        if(evt == "uz") {
            nameRu.current.style.display = "none";
            nameEn.current.style.display = "none";
            nameUz.current.style.display = "block";

            descriptionRu.current.style.display = "none";
            descriptionEn.current.style.display = "none";
            descriptionUz.current.style.display = "block";

        } else if(evt == "en") {
            nameRu.current.style.display = "none";
            nameUz.current.style.display = "none";
            nameEn.current.style.display = "block";

            descriptionRu.current.style.display = "none";
            descriptionUz.current.style.display = "none";
            descriptionEn.current.style.display = "block";

        } else if(evt == "ru") {
            nameEn.current.style.display = "none";
            nameUz.current.style.display = "none";
            nameRu.current.style.display = "block";

            descriptionUz.current.style.display = "none";
            descriptionEn.current.style.display = "none";
            descriptionRu.current.style.display = "block";
        }
    }


    return(
        <section className="bg-sky-950 w-[85%]  relative left-60">
            <div className="container">
                <header className="flex justify-between border-b-2 border-sky-700 pb-[13px]">
                    <h1 className="text-white font-bold mt-4 ml-5 text-[20px] tracking-[2px]">Admin</h1>
                    <div className="flex text-white mt-5 mr-5">
                        <img className="mr-4" src={user} width={25} height={25} alt="" />
                        <Link to={'/admin'}><span className="font-bold">John Born</span></Link>
                    </div>
                </header>
               <Analytics/>
                <div className="border-2 mt-10 p-5 rounded-lg border-sky-800 min-h-[700px]">
                    <div className="flex justify-between mt-5">
                        <h3 className="text-white font-bold text-[25px] tracking-[2px]">Products</h3>
                       <div className="flex">
                            <div className="mr-4 ">
                                <img src="" alt="" />
                                <input className="text-white rounded-lg bg-transparent border-2 border-solid border-sky-900 p-2" type="text" placeholder="search..." />
                            </div>
                            <div className="mr-4"><input className="bg-sky-900 text-white p-2  rounded-lg  " type="date"  /></div>
                            <button onClick={openModal} className="bg-sky-900 text-white p-2 font-mono  rounded-lg">Create product</button>
                       </div>
                       {/* modal POST */}
                       <Modal
                                isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
                                }}>
                                <div className="">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Create product</h1> 
                                    <select defaultValue={lang} ref={chaneLanguage} onChange={(evt) => changeLang(evt.target.value)} className="border-lg border-2 border-black rounded-lg relative left-72 bottom-2 ">
                                        <option value="uz">uz</option>
                                        <option value="ru">ru</option>
                                        <option value="en">en</option>
                                    </select>
                                    <button className="border-solid border-black border-2 px-1 rounded-lg relative left-80  mb-4 " onClick={() => closeModal()} >X</button>
                                    </div>
                                    <div className="create flex">
                                    <div className="create__left mr-10">
                                        
                                        <div className="">
                                            <label htmlFor="name">Product name ({lang}) </label>
                                            <input required ref={nameUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder="name uz"/> <br />
                                            <input required ref={nameRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name ru" /> <br />
                                            <input required  ref={nameEn} className=" w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name en" />
                                        </div>
                                        
                                        <div className="">
                                            <label htmlFor="name">Product description ({lang}) </label>
                                            <input required  ref={descriptionUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder="description uz" /> <br />
                                            <input required  ref={descriptionRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="description ru" /> <br />
                                            <input required ref={descriptionEn} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="description en" />
                                        </div>
                                        <div className="">
                                            <label htmlFor="name">Product price</label>
                                            <input required ref={price} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                        </div>
                                        <div className="">
                                            <label htmlFor="name">Product discount</label>
                                            <input required ref={discount} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                        </div>
                                    </div>
                                   <div className="create__right">
                                   <div className="">
                                        <label htmlFor="name">Categories</label>

                                        <select required id="select"  ref={categoryId} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900">
                                            <option selected>Categoriya tanlang</option>
                                        </select>

                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product unit</label>
                                        <input required ref={unit} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Delivery price</label>
                                        <input required ref={deleveryPrice} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Stock</label> 
                                        <input required ref={stock} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product image</label>
                                        <input required onChange={handleFileChange} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="file" />
                                    </div>
                                   </div>
                                    </div>
                                    <button onClick={() => addData()} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Add product</button>
                                </div>
                            </Modal>
                       {/* modal  POST*/}

                        {/* modal UPDATE */}
                        <Modal
                                isOpen={EditmodalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal"
                                style={{
                                    content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)',}, 
                                }}>
                                <div className="">
                                    <div className="flex">
                                    <h1 className="font-bold text-center mb-2 text-lg">Edit product</h1> 
                                    <select defaultValue={lang} ref={chaneLanguage} onChange={(evt) => changeLang(evt.target.value)} className="border-lg border-2 border-black rounded-lg relative left-72 bottom-2 ">
                                        <option value="uz">uz</option>
                                        <option value="ru">ru</option>
                                        <option value="en">en</option>
                                    </select>
                                    <button className="border-solid border-black border-2 px-1 rounded-lg relative left-80  mb-4 " onClick={() => EditcloseModal()} >X</button>
                                    </div>
                                    <div className="create flex">
                                    <div className="create__left mr-10">
                                        
                                        <div className="">
                                            <label htmlFor="name">Product name ({lang}) </label>
                                            <input  required  ref={nameUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder={""} /> <br />
                                            <input  ref={nameRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name ru" /> <br />
                                            <input  ref={nameEn} className=" w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="name en" />
                                        </div>
                                        
                                        <div className="">
                                            <label htmlFor="name">Product description ({lang}) </label>
                                            <input  ref={descriptionUz} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" placeholder="description uz" /> <br />
                                            <input  ref={descriptionRu} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="description ru" /> <br />
                                            <input  ref={descriptionEn} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900 hidden" type="text" placeholder="description en" />
                                        </div>
                                        <div className="">
                                            <label htmlFor="name">Product price</label>
                                            <input ref={price} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                        </div>
                                        <div className="">
                                            <label htmlFor="name">Product discount</label>
                                            <input ref={discount} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                        </div>
                                    </div>
                                   <div className="create__right">
                                   <div className="">
                                        <label htmlFor="name">Categories</label>

                                        <select id="select"  ref={categoryId} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900">
                                            <option selected>Categoriya tanlang</option>
                                        </select>

                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product unit</label>
                                        <input ref={unit} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="text" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Delivery price</label>
                                        <input ref={deleveryPrice} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Stock</label> 
                                        <input ref={stock} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="number" />
                                    </div>
                                    <div className="">
                                        <label htmlFor="name">Product image</label>
                                        <input onChange={handleFileChange} className="w-64 text-black bg-white p-2 border-solid border-2 border-slate-900" type="file" />
                                    </div>
                                   </div>
                                    </div>
                                    <button onClick={() => UpdateData(`${productId}`)} className="w-[100%] mt-5 p-2 bg-blue-400 text-white rounded-lg ">Edit product</button>
                                </div>
                            </Modal>
                       {/* modal  UPDATE*/}
                    </div>
                    <table className="mt-10 w-[1200px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Image</td>
                                <td className="text-white font-bold relative right-24">Name</td>
                                <td className="text-white font-bold relative right-10">Description</td>
                                <td className="text-white font-bold relative left-10">Price</td>
                                <td className="text-white font-bold relative left-24">Disocunt</td>
                                <td className="text-white font-bold relative left-24">Modify</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map(item => {
                                    return(
                                        <tr>
                                            <td className=""><img className="mt-4 rounded-lg" src={item.image[0]} width={100} height={80} alt="image"/></td>
                                            <td className="text-slate-300 relative right-24">{item.name_uz}</td>
                                            <td className="text-slate-300 w-60 relative right-10">{item.description_uz}</td>
                                            <td className="text-slate-300 relative left-10">{item.price}</td>
                                            <td className="text-slate-300 relative left-24">{item.discount}</td>
                                            <td className="text-slate-300 relative left-24">
                                                <button onClick={() => {
                                                    EditopenModal()
                                                    setProductId(`${item.id}`)
                                                }  }>
                                                    <img className="mr-5" src={edit} width={20} alt="" />
                                                </button>
                                                <button onClick={() => deleteData(`${item.id}`)}>
                                                    <img className="" src={delet} width={20} alt="" />
                                                </button>  
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