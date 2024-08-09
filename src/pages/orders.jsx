// images
import user from "../assets/images/account.svg"

export default function Orders() {
    return(
        <section className="bg-sky-950 w-[100%]">
            <div className="container">
                <header className="flex justify-end border-b-2 border-white pb-[13px]">
                    <h1 className="">Analytics</h1>
                    <div className="flex text-white mt-5 mr-5">
                        <img className="mr-4" src={user} width={25} height={25} alt="" />
                        <span className="font-bold">John Born</span>
                    </div>
                </header>
                <div className="">
                    <h2 className="text-white">Orders</h2>
                </div>
            </div>
        </section>
    )
}