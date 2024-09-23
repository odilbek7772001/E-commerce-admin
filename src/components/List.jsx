import { Link, NavLink } from "react-router-dom";

// iamges
import logo from "../assets/images/logo.svg";

export default function List() {
    return(
        <div className="bg-sky-900 w-[20%] h-[100vh] fixed">
            <div className="py-5 pl-10 border-b-2 border-solid border-sky-600">
                <Link to={'/'}>
                    <img className="rounded-lg" src={logo} width={150}  alt="logo"/>
                </Link>
            </div>
            <ul className="pt-10 pl-10 ">
                <NavLink to={'/'} className=" block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg"><a href="#">Analytic</a></NavLink>
                <NavLink to={'/products'} className=" block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg"><a href="#">Products</a></NavLink>
                <NavLink to={'/categories'} className="block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg "><a href="#">Categories</a></NavLink>
                <NavLink to={'/contacts'} className="block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg "><a href="#">Contacts</a></NavLink>
                <NavLink to={'/orders'} className="block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg"><a href="#">Orders</a></NavLink>
                <NavLink to={'/payments'} className="block text-white mb-4 text-[20px] tracking-[2px] p-2 rounded-lg "><a href="#">Payments</a></NavLink>
                <NavLink to={'/contracts'} className="block text-white text-[20px] tracking-[2px] p-2 rounded-lg "><a href="#">Contracts</a></NavLink>
            </ul>
        </div>
    )
}