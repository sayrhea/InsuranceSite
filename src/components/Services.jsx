import { services } from "../../constants/service";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeService, setActiveService] = useState(1);

  const handleServiceClick = (id) => {
    setActiveService(id);
  };

  const serviceRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
      },
    });

    scrollTimeline.fromTo(
      serviceRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
      }, // start fully hidden on the right
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 2,
        delay: 0.5,
        ease: "power1.inOut",
      }, // reveal fully
    );
  });

  return (
    <main id="services">
      <div className="services-header mx-20 pb-20" ref={serviceRef}>
        <div className="pt-[150px]">
          <div
            className="bg-white rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-[black] 
                               h-[30px] w-[100px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
          >
            SERVICES
          </div>
        </div>
        <h1 className="text-5xl pt-[30px] leading-[1.2]">
          Tailored insurance for
          <br /> every stage of life.
        </h1>
      </div>
      <hr className="white-line" />
      <div className="services-body">
        <ul className="">
          {services.map((service) => (
            <li
              key={service.id}
              className={`${activeService === service.id ? "bg-blue-100 text-black" : ""}`}
            >
              <div
                className={`lg:h-[300px] flex lg:flex-row flex-col md:justify-center justify-around 
                                md:items-center lg:gap-40 gap-10 md:ml-20 ml-5 md:mr-60 mr-15 
                                `}
                onMouseEnter={() => handleServiceClick(service.id)}
                onMouseLeave={() => handleServiceClick(1)}
              >
                <h1 className="lg:text-7xl text-4xl font-bold">{service.id}</h1>
                <h2 className="text-3xl w-[300px]">{service.title}</h2>
                <p className="leading-[35px]">{service.desc}</p>
              </div>
              <hr className="white-line" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Services;
