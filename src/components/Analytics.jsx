import { useState , useEffect} from "react";
import axios from "axios";


export default function Analytics() {

    // states
    const [ users, setUsers ] = useState()
    const [ analytcs, setAnaliytcs] = useState()
    const [ userRegister, setUserRegister] = useState()
    const [ contracts, setContracts ] = useState()
    const [ productSales, setProductSales] = useState()
    const [ stockProducts, setStockProducts  ] = useState()
    

    // get users
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-user-analytics' , {
            withCredentials: true
        })
        .then(response => {
            setUsers(response.data.analytics); 
            })
        .catch(error => {
            setError(error);
        });
    },[]);
    
    const changeUsers = (e) => {
        const userMonth = e.target.value;

        users.forEach(i => {
            const selectUser = document.getElementById('user')

            if(userMonth == i.month) {
                selectUser.textContent = i.users
            }
        });
    }

    // get user-registration
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-12-month-user-registration-analytics' , {
            withCredentials: true
        })
        .then(response => {
            setUserRegister(response.data.analytics.monthlyData); 
            })
        .catch(error => {
            setError(error);
        });
    },[]);

    const changeRegister = (e) => {
        const userMonth = e.target.value;

        userRegister.forEach(i => {
            const headAmount = document.getElementById('heading')

            if(userMonth == i.month) {
                headAmount.textContent = i.userRegistrations
            }
        });
    }

    // // get analytcs
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-12-month-payment-analytics' , {
            withCredentials: true
        })
        .then(response => {
            setAnaliytcs(response.data.analytics.monthlyData); 
            })
        .catch(error => {
            setError(error);
        });

    },[""]);

    const changeAnalytc = (evt) => {
        const monthName = evt.target.value;

        analytcs.forEach(i => {
            const spanPay = document.getElementById('span');
            const headAmount = document.getElementById('head')
            if(monthName == i.month) {
                spanPay.textContent = i.totalPayments
                headAmount.textContent = i.totalAmount
            }
        });
    }
   


     // get contarcts
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-12-month-contract-analytics' , {
            withCredentials: true
        })
        .then(response => {
            setContracts(response.data.analytics); 
            })
        .catch(error => {
            setError(error);
        });
    },[]);
    

    const changeContarcts = (e) => {
        const contractMonth = e.target.value;
        
        contracts.forEach(i => {
            const headContract = document.getElementById('headingContract');
            const headAmount = document.getElementById('headingAmount');
            const headPayment = document.getElementById('headingPayment');

            if(contractMonth == i.month) {
                headContract.textContent = i.totalContracts
                headAmount.textContent = i.totalAmount
                headPayment.textContent = i.approvedPayments
            }
        });
    }


     // get product-sales
     useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-12-month-product-sales-analytics' , {
            withCredentials: true
        })
        .then(response => {
            setProductSales(response.data.analytics); 
            })
        .catch(error => {
            setError(error);
        });
},[]);    

    const changeProductSales = (e) => {
        const salesMonth = e.target.value;

        productSales.forEach(i => {
            const productSale = document.getElementById('productSales')

            if(salesMonth == i.month) {
                productSale.textContent = i.products
            }
        });
    }

     // get stock-products
     useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-low-stock-products' , {
            withCredentials: true
        })
        .then(response => {
            setStockProducts(response.data.products); 
            })
        .catch(error => {
            setError(error);
        });
    },[]);        

    return(
        <>
             <h1 className="text-white font-bold mt-4 ml-5 text-[23px] tracking-[2px]">Analytics</h1>
                <div className="flex mt-5">
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg mr-5">
                        <h2 className="font-bold text-[20px] tracking-[1px]">Users </h2>
                        <span>Month : </span>  <select onChange={(e) => changeUsers(e)} className="text-white bg-transparent mt-4 mb-2" name="" id="">
                            {
                                users?.map(item => {
                                    return(
                                        <option className="text-black" value={item.month}>{item.month}</option>
                                    )
                                })
                                
                            }
                        </select> <br />
                        <span className="">Users : </span> <span id="user">{0}</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg mr-5">
                        <h2 className="font-bold text-[20px] tracking-[1px]">Regsitration</h2>
                        
                        <span>Month : </span>  <select onChange={(e) => changeRegister(e)} className="text-white bg-transparent mt-5" name="" id="">
                            {
                                userRegister?.map(item => {
                                    return(
                                        <option className="text-black" value={item.month}>{item.month}</option>
                                    )
                                })
                            }
                        </select> <br />
                            <h4 className="inline-block mt-5">Users : </h4> <span className="" id="heading">{0}</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg mr-5">
                        <h2 className="font-bold text-[20px] tracking-[1px]">Payment</h2>
                       <span>Month : </span>  <select onChange={(e) => changeAnalytc(e)} className="text-white bg-transparent mt-5" name="" id="">
                            {
                                analytcs?.map(item => {
                                    return(
                                        <option className="text-black" value={item.month}>{item.month}</option>
                                    )
                                })
                            }
                        </select> <br />

                        <span className="inline-block mt-5">TotalPayments : </span> <span className="" id="span">{0}</span> <br /> 
                        <h4 className="inline-block mt-5">TotalAmount : </h4> <span className="" id="head">{0}</span>
                    </div>
                   
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg mr-5">
                        <h2 className="font-bold text-[20px] tracking-[1px]">Contracts </h2>

                        <span>Month : </span>  <select onChange={(e) => changeContarcts(e)} className="text-white bg-transparent mt-4 mb-2" name="" id="">
                            {
                                contracts?.map(item => {
                                    return(
                                        <option className="text-black" value={item.month}>{item.month}</option>
                                    )
                                })
                            }
                        </select> <br />
                        <span>Contracts :</span> <span id="headingContract">{0}</span> <br />
                        <span>Amounts : </span> <span id="headingAmount">{0}</span> <br />
                        <span>Payments : </span> <span id="headingPayment">{0}</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg mr-5">
                        <h2 className="font-bold text-[20px] tracking-[1px]">Product sales</h2>
                        <span>Month : </span> <select onChange={(e) => changeProductSales(e)} className="text-white bg-transparent mt-4 mb-2" name="" id="">
                            {
                                productSales?.map(item => {
                                    return(
                                        <option className="text-black" value={item.month}>{item.month}</option>
                                    )
                                })
                            }
                        </select> <br />
                        <span className="">Products : </span> <span id="productSales">{0}</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg">
                        <h2 className="font-bold text-[20px] tracking-[1px] mb-5">Stock</h2>
                        <span className="">Products : </span> <span id="Stockproducts">{stockProducts ?  stockProducts.length : null}</span>
                    </div>
                </div>
        </>
    )
}