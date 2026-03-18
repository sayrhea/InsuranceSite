import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
    useGSAP(() => {
        gsap.from(".text-section", {
            x: -600,
            opacity: 0.5,
            duration: 1,
            ease: "power1.in"
        })
        gsap.from(".img-section", {
            // x: -100,
            opacity: 0,
            duration: 0.7,
            delay: 1.2,
            ease: "power2.out"
        })
    })

    return (
        <main className="flex lg:flex-row flex-col justify-between mx-20 my-10 lg:h-[95vh]">
            <div className="text-section lg:w-[50%] py-[5%]">
                <h1 className="lg:text-7xl text-5xl font-[400px] leading-[1.2]">Insurance<br />Coverage You<br /> Can Count On</h1>
                <p className="lg:text-2xl text-xl my-5 pb-10 text-gray-600">Wherever and whenever you need.<br /> It's our job to protect you and what matters to<br /> you most.</p>
                <button className="bg-gray-800 text-white px-6 py-4 text-lg rounded-full hover:bg-green-800">Contact Us</button>
            </div>
            <div className="img-section lg:w-[50%] w-[100%] h-[80%] bg-green-900 grid gap-4 overflow-hidden">
                <div className="home-img flex">
                    <img src="/home-img1.avif" alt="woman" />
                </div>
                <div className="home-img flex justify-end">
                    <img src="/home-img3.png" alt="man" />
                </div>
                <div className="home-img flex">
                    <img src="/home-img4.jpg" alt="family" />
                </div>
            </div>
        </main>
    )
}

export default Home