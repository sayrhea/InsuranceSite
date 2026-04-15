import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";

const Approach = () => {
  const approachRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#approach",
        start: "top 80%",
      },
    });

    scrollTimeline.from(approachRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 2,
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="approach" className="relative">
      <div className="approach-header bg-blue-200 px-20 h-[950px]">
        <div className="pt-[150px]" ref={approachRef}>
          <div
            className="bg-white rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-[black] 
                               h-[30px] w-[100px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
          >
            APPROACH
          </div>
          <h1 className="text-5xl pt-[30px] leading-[1.2]">
            Our goal is to protect what
            <br /> you care about most
          </h1>
        </div>
      </div>
      <div className="approach-body">
        <h1 className="text-4xl pt-[30px] leading-[1.5] px-30 mt-30">
          This is the space to introduce visitors to the business or brand.
          Briefly explain who's behind it, what it does and what makes it
          unique. Share its core values and what this site has to offer.
        </h1>
      </div>
    </div>
  );
};

export default Approach;
