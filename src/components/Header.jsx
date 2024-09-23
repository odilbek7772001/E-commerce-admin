import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";


// images
import adminImage from "../assets/images/account.svg";
import notification from "../assets/images/notification.svg";


export default function Header() {

    const [ user, setUser ] = useAuth();
        
       return(
        <>
            <header className="flex justify-between border-b-2 border-sky-700 pb-[13px]">
                <h1 className="text-white font-bold mt-4 ml-5 text-[20px] tracking-[2px]">{user.role}</h1>
                    <div className="flex">
                        <Link className="mt-5 mr-5" to={'/messages'}>
                            <img className="" src={notification} width={25} height={20} alt="notifiation"/>
                        </Link>
                        <Link className="flex text-white mt-5 mr-5" to={'/admin'}>
                            <img className="mr-4" src={adminImage} width={25} height={25} alt="" />
                            <span className="font-bold">{user.name}</span>
                        </Link>
                    </div>
            </header>
        </>
       )
}