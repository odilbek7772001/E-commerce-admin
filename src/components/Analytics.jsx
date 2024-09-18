import { useState , useEffect} from "react";
import axios from "axios";




export default function Analytics() {

    const [analytcs, setAnaliytcs] = useState()

    // get analytcs
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

    console.log(analytcs);
    


    return(
        <>
             <h1 className="text-white font-bold mt-4 ml-5 text-[20px] tracking-[2px]">Analytics</h1>
                <div className="flex justify-between mt-5">
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg">
                        <h2 className="font-bold">Payment analytcs</h2>
                        {
                            analytcs?.map(item => {
                                return(
                                    <div>
                                        {/* <h4>{item.totalPayments}</h4>
                                        <h4>{item.totalAmount}</h4> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg">
                        <h2 className="font-bold">Sale products</h2>
                        <span className="">50.8K</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg">
                        <h2 className="font-bold">Stock products</h2>
                        <span className="">50.8K</span>
                    </div>
                    <div className="border-2 border-solid border-sky-800 p-5 text-white rounded-lg">
                        <h2 className="font-bold">Order products</h2>
                        <span className="">50.8K</span>
                    </div>
                </div>
        </>
    )
}