// images
import user from "../assets/images/user.png";

export default function Header() {
    return(
        <div>
            <header className="">
                <div className="flex">
                    <span className="text-white mr-4 pr-2 border-r-2 font-bold">Просмотр веб-сайта</span>
                    <img className="mr-4" src={user} width={25} height={25} alt="user" />
                    <span className="text-white font-bold" >Joe Melton</span>
                </div>
            </header>
        </div>
    )
}