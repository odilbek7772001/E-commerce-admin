import { useState, useEffect } from "react";
import { BarChart, LineChart } from "@mui/x-charts";
import axios from "axios";

// component
import Header from "../components/Header";
  
// images
import edit from "../assets/images/edit.svg";
import delet from "../assets/images/delete.svg";


export default function Analitica() {

    // states
    const [ contracts, setContracts ] = useState([])
    const [ products, setProducts ] = useState([])

     // get contarcts
    //  useEffect(() => {
    //     axios.get('https://5jiek.uz/api/v1/analytics/get-12-month-contract-analytics' , {
    //         withCredentials: true
    //     })
    //     .then(response => {
    //         setContracts(response.data.analytics); 
    //         })
    //     .catch(error => {
    //         setError(error);
    //     });
    // },[]);
    // // console.log(contracts);

    // get stock-products
    useEffect(() => {
        axios.get('https://5jiek.uz/api/v1/analytics/get-low-stock-products' , {
            withCredentials: true
        })
        .then(response => {
            setProducts(response.data.products); 
            })
        .catch(error => {
            setError(error);
        });
    },[]);
    

    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-56">
            <div className="container">
                <Header/>
                <h1 className="text-white font-bold tracking-[2px] text-[25px] mt-5">Analytics</h1>
                <div className="flex">
                    <div className="w-[400px] border-2 border-solid border-sky-800 mt-5 p-5 rounded-lg text-white mr-5">
                        <h2 className="text-[20px] tracking-[2px]">Contracts</h2>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="w-[400px] border-2 border-solid border-sky-800 mt-5 p-5 rounded-lg text-white mr-5">
                        <h2 className="text-[20px] tracking-[2px]">Payment</h2>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="w-[400px] border-2 border-solid border-sky-800 mt-5 p-5 rounded-lg text-white">
                        <h2 className="text-[20px] tracking-[2px]">Product sales</h2>
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={400}
                            height={200}
                            />
                    </div>
                </div>
                <div className="border-2 border-solid border-sky-800 mt-5 p-5 rounded-lg">
                    <h3 className="text-white text-[25px] tracking-[2px]">Products status (stock)</h3>
                    <table className="mt-10 w-[1200px]">
                        <thead className="">
                            <tr className="">
                                <td className="text-white font-bold">Image</td>
                                <td className="text-white font-bold relative right-24">Name</td>
                                <td className="text-white font-bold relative right-12">Description</td>
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
                                                <button >
                                                    <img className="mr-5" src={edit} width={20} alt="" />
                                                </button>
                                                <button>
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