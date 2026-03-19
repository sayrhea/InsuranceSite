import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
    const imgRef = useRef();
    const tl = gsap.timeline({ paused: true });

    useEffect(() => {
        gsap.fromTo(imgRef.current,
            { clipPath: "inset(0 100% 0 0)" }, // start fully hidden on the right
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, delay: 1, ease: "power1.inOut" } // reveal fully
        );

        tl.to(".home-img1-wrapper", { x: 120, duration: 0.3 });
        tl.to(".row1-left-div", { x: 60, duration: 0.3, delay: -0.3 });
        tl.to("row1-right-div", { opacity: 0, duration: 0.3, delay: -0.3 });

        tl.to(".row2-img-wrapper", { x: -150, duration: 0.3, delay: -0.3 });
        tl.to(".row2-right-div", { x: -70, duration: 0.3, delay: -0.3 });

        tl.to(".row3-blue-div", { opacity: 0, duration: 0.3, delay: -0.3 });
        tl.to(".row3-green-div", { opacity: 0, duration: 0.3, delay: -0.2 });
    }, [tl])

    useGSAP(() => {
        gsap.from(".text-section", {
            x: -600,
            opacity: 0.5,
            duration: 1,
            ease: "power1.in"
        })
    })

    return (
        <main className="flex lg:flex-row flex-col justify-between mx-20 my-10 lg:h-[95vh]">
            <div className="text-section lg:w-[50%] py-[5%]">
                <h1 className="lg:text-7xl text-5xl font-[400px] leading-[1.2]">Insurance<br />Coverage You<br /> Can Count On</h1>
                <p className="lg:text-2xl text-xl my-5 pb-10 text-gray-600">Wherever and whenever you need.<br /> It's our job to protect you and what matters to<br /> you most.</p>
                <button className="bg-gray-800 text-white px-6 py-4 text-lg rounded-full hover:bg-green-800">Contact Us</button>
            </div>
            <div
                className="img-section w-[600px] h-[600px] grid"
                ref={imgRef}
                onMouseEnter={() => tl.play()}
                onMouseLeave={() => tl.reverse()}
            >
                <div className="home-img-div home-img-row-1 flex cursor-pointer">
                    <div className="bg-green-900"></div>
                    <div className="bg-blue-900 z-49 row1-left-div"></div>
                    <div className="overflow-hidden z-50 home-img1-wrapper">
                        <img src="/home-img1.avif" alt="woman" className="home-img1" />
                    </div>
                    <div className="row1-right-div bg-blue-100 rounded-tl-[0] rounded-br-[0] rounded-tr-[0] rounded-bl-[40%] right-[0] h-[200px] w-[350px]"></div>

                </div>
                <div className="home-img-div home-img-row-2  cursor-pointer">
                    <div className="bg-green-900 w-[400px] rounded-tl-[0] rounded-br-[100px] rounded-tr-[100px] rounded-bl-[0]"></div>
                    <div className="bg-blue-100 rounded-[50%]"></div>
                    <div className="row2-right-div bg-gray-400 rounded-[50%] z-49"></div>
                    <div className="row2-img-wrapper rounded-[50%] overflow-hidden z-50">
                        <img src="/home-img3.png" alt="man" />
                    </div>
                </div>
                <div className="home-img-div home-img-row-3  flex curosor-pointer">
                    <div className="left-[0] h-[200px] w-[200px]">
                        <img src="/home-img4.jpg" alt="family" className="rounded-tl-[0] rounded-br-[0] rounded-tr-[0] rounded-bl-[60%]" />
                    </div>
                    <div className="row3-blue-div bg-blue-100 left-[200px] z-[50]"></div>
                    <div className="row3-green-div bg-green-900 left-[270px] z-[50]"></div>
                    <div className="right-[0] bg-gray-400 h-[200px] w-[400px] rounded-tl-[0] rounded-br-[100px] rounded-tr-[100px] rounded-bl-[0]"></div>
                </div>

            </div>
        </main>
    )
}

export default Home