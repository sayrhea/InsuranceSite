import { useGSAP } from "@gsap/react";
import { aboutPoints } from "../../constants/AboutPoints";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    scrollTimeline.from(aboutRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 2,
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about">
      <div className="about-header ml-20 mb-20 sticky top-0" ref={aboutRef}>
        <div className="pt-[150px]">
          <div
            className="bg-white rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-[black] 
                               h-[30px] w-[100px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
          >
            ABOUT
          </div>
        </div>
        <h1 className="text-5xl pt-[30px] leading-[1.2]">
          All about
          <br /> Colloway Health
        </h1>
      </div>
      <div className="about-body">
        {aboutPoints.map((point) => (
          <p key={point.id} className="mb-6 text-lg">
            {point.desc}
          </p>
        ))}
      </div>
      <div className="about-img-section sticky bottom-0">
        <div className="flex about-img-section-1">
          <div></div>
          <div></div>
        </div>
        <div className="flex about-img-section-2">
          <div></div>
          <div></div>
        </div>
        <div className="flex about-img-section-3">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
