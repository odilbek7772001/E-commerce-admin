import Header from "../components/Header"


export default function Messages() {
    return(
        <section className="bg-sky-950 w-[85%] h-[150vh] relative left-60">
            <div className="container">
                <Header/>
                <h1 className="text-white text-[25px] mt-5">Messages</h1>

                <div className="relative top-[500px]">
                    <input className="w-[90%] bg-transparent border-2 border-sky-800 p-2 rounded-lg text-white" type="text" placeholder="enter message" />
                    <button className="w-[10%] text-white bg-transparent border-2 border-sky-800 p-2 rounded-lg">Send</button>
                </div>
            </div>
        </section>
    )
}