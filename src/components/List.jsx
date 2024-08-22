import { Link, NavLink } from "react-router-dom";

// iamges
import logo from "../assets/images/logo.jpg";

export default function List() {
    return(
        <div className="bg-sky-900 w-[20%] h-[100vh] fixed">
            <div className="py-5 pl-10 border-b-2 border-solid border-sky-600">
                <img className="rounded-lg " src={logo} width={140}  alt="logo"/>
            </div>
            <ul className="pt-10 pl-20 ">
                <NavLink to={'/products'} className=" block text-white mb-4 text-[20px] tracking-[2px]"><a href="#">Products</a></NavLink>
                <NavLink to={'/orders'} className="text-white text-[20px] tracking-[2px]"><a href="#">Orders</a></NavLink>
            </ul>
        </div>
    )
}